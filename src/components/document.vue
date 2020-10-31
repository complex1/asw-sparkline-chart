<template>
  <section>
    <div style="display: none"><slot/></div>
    <h5>Element:</h5>
    <gap g="5"/>
    <code><b>&#60;</b>{{component.name}}<b>/></b></code>
    <gap g="5"/>
    <h4>Props:</h4>
    <gap g="5"/>
    <table width="100%">
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default Value</th>
        <!-- <th>Description</th> -->
      </tr>
      <tr class="s" v-for="i in component.properties" :key="i.id">
        <td>{{i.name}}</td>
        <td>{{i.type || '-'}}</td>
        <td>{{i.defaultValue || '-'}}</td>
        <!-- <td>{{i.description || '-'}}</td> -->
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Documentation',
  data: function () {
    return {
      component: {}
    }
  },
  methods: {
    getKebabCaseFromCamelCase (internalName) {
      return internalName && internalName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    },
    getPropertyType (typeFunctionString) {
      if (typeFunctionString) {
        const typeFunction = typeFunctionString.toString().split(' ')[1]
        return typeFunction.substr(0, typeFunction.length - 2).toLowerCase()
      }
      return 'unknown'
    },
    attemptCodeUnindent (string) {
      const codeLines = string.split('\n')
      const lastLine = codeLines.slice(-1)[0]
      const leadSpacingToRemove = lastLine.match(/^\s*/)[0]
      if (leadSpacingToRemove) {
        const adjustedCodeLines = []
        codeLines.forEach(line => {
          adjustedCodeLines.push(line.replace(new RegExp(`^${leadSpacingToRemove}`), ''))
        })
        string = adjustedCodeLines.join('\n')
      }
      return string
    },
    loadProperties (vnode) {
      if (!vnode) {
        return false
      }
      const properties = []
      const propertyKeys = vnode.componentInstance.$options.props && Object.keys(vnode.componentInstance.$options.props)
      if (propertyKeys) {
        propertyKeys.sort()
        for (let i = 0; i < propertyKeys.length; i += 1) {
          const item = propertyKeys[i]
          const name = this.getKebabCaseFromCamelCase(item)
          const type = this.getPropertyType(vnode.componentInstance.$options.props[item].type)
          let defaultValue = vnode.componentInstance.$options.props[item].default && vnode.componentInstance.$options.props[item].default.toString()
          const required = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.required
          const deprecated = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.deprecated
          let example = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.example
          const description = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.description
          switch (type) {
            case 'array':
              example = example || '[4, 8, 15, 16, 23, 42]'
              example = this.attemptCodeUnindent(example)
              if (defaultValue) {
                const cleanedDefaultValue = defaultValue.match(/{\s*return\s*(.*);?\s*}/)
                if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                  defaultValue = cleanedDefaultValue[1]
                }
                // Attempt to de-indent if necessary
                defaultValue = this.attemptCodeUnindent(defaultValue)
              }
              break
            case 'object':
              example = example || '{ key1: value1, key2: value2 }'
              example = this.attemptCodeUnindent(example)
              if (defaultValue) {
                let cleanedDefaultValue
                const containsFunction = defaultValue.match(/(?:_default|function)\(\)/)
                if (containsFunction) {
                  cleanedDefaultValue = defaultValue.match(/(?:_default|function)\(\) (?:{\s*return )?([\s\S]*)/)
                } else {
                  cleanedDefaultValue = defaultValue.match(/{\s*return\s*([\s\S]*});?\s*}$/)
                }
                if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                  defaultValue = cleanedDefaultValue[1].replace(/;\s*}$/, '')
                }
                // Attempt to de-indent if necessary
                defaultValue = this.attemptCodeUnindent(defaultValue)
              }
              break
            case 'string':
              example = example || 'Some text'
              break
            case 'function':
              example = example || '(value) => { return value.toUpperCase() }'
              example = this.attemptCodeUnindent(example)
              if (defaultValue) {
                const cleanedDefaultValue = defaultValue.match(/{(.*)}/)
                if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                  defaultValue = cleanedDefaultValue[1]
                }
                // Attempt to de-indent if necessary
                defaultValue = this.attemptCodeUnindent(defaultValue)
              }
              break
            case 'number':
              example = example || '14'
              break
            case 'boolean':
              example = example || 'true'
              break
            default:
              example = example || ''
          }
          if (example) {
            example = example.replace(/"/g, "'")
          }
          properties.push({
            name,
            type,
            defaultValue,
            example,
            description,
            required,
            deprecated
          })
        }
        if (properties.length > 0) {
          properties.sort((a, b) => {
            const aIsRequired = !!a.required
            const bIsRequired = !!b.required
            if (aIsRequired === bIsRequired) {
              return a.name > b.name
            }
            if (aIsRequired !== bIsRequired) {
              if (aIsRequired && !bIsRequired) {
                return -1
              }
              return 1
            }
            return 1
          })
        }
      }
      return properties
    },
    getTemplate () {
      const components = this.$slots.default && this.$slots.default.filter(vnode => vnode.tag !== undefined)
      const loadedComponents = []
      if (!components) {
        return []
      }
      for (let i = 0; i < components.length; i += 1) {
        const properties = this.loadProperties(components[i])
        const component = {
          name: components[i].componentOptions.tag,
          description: components[i].componentInstance.$options.meta && components[i].componentInstance.$options.meta.description,
          properties: [...properties],
          events: (components[i].componentInstance.$options.meta && components[i].componentInstance.$options.meta.events) ? components[i].componentInstance.$options.meta.events : [],
          slots: (components[i].componentInstance.$options.meta && components[i].componentInstance.$options.meta.slots) ? components[i].componentInstance.$options.meta.slots : []
        }
        loadedComponents.push(component)
      }
      return loadedComponents
    }
  },
  computed: {
  },
  mounted () {
    this.component = this.getTemplate()[0]
  }
}
</script>

<style lang="scss" scoped>
table {
  font-size: 12px;
  color: #333333;
  border-spacing: 0px !important;
  border-collapse: collapse;
  th,td {
    padding: 10px 5px;
    text-align: left;
    border: 1px solid #cacaca;
  }
}
code {
    padding: 5px 15px;
    background: #e4e4d9;
    color: #ff6b00;
    b {
      color: #4040ff;
    }
}
</style>
