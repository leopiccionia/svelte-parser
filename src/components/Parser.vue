<template>
  <div>
    <div class="parser">
      <div class="input">
        <button @click="parse">Parse</button>
        <ResizableTextarea>
          <textarea v-model="input" rows="10"/>
        </ResizableTextarea>
      </div>
      <div class="output">
        <button @click="toggleView">{{ view === 'tree' ? 'View raw text' : 'View tree' }}</button>
        <JsonPretty v-show="view === 'tree'" :data="output"/>
        <pre v-show="view === 'raw'">{{ prettyOutput }}</pre>
      </div>
    </div>
    <div class="about">
      <p>Svelte version: {{ svelteVersion }}</p>
      <p>Copyright 2019 <a href="https://github.com/leopiccionia">Leonardo Piccioni de Almeida</a></p>
    </div>
  </div>
</template>

<script>
  import { parse } from 'svelte/compiler'
  import JsonPretty from 'vue-json-pretty'

  import lock from '../../package-lock.json'

  import ResizableTextarea from './ResizableTextarea.vue'

  const input = '<h1>Hello, world!</h1>'

  export default {
    name: 'SvelteParser',
    components: {
      JsonPretty,
      ResizableTextarea
    },
    data () {
      return {
        input,
        output: parse(input),
        view: 'tree'
      }
    },
    computed: {
      prettyOutput () {
        return JSON.stringify(this.output, null, 2)
      },
      svelteVersion () {
        return lock.dependencies.svelte.version
      }
    },
    methods: {
      parse () {
        this.output = parse(this.input)
      },
      toggleView () {
        if (this.view === 'tree') {
          this.view = 'raw'
        } else {
          this.view = 'tree'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .about {
    color: #676778;
    margin-top: 10px;

    p {
      margin: 5px 0;
    }
  }

  .parser {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      margin-top: 60px;
    }

    button {
      border: none;
      border-radius: 3px;
      color: white;
      padding: 5px 10px;
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 100;
    }
  }

  .input {
    position: relative;

    button {
      background-color: #ff3e00;
    }

    textarea {
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
    }
  }

  .output {
    padding: 10px;
    position: relative;

    button {
      background-color: #676778;
    }

    pre {
      font-size: 14px;
      margin: 0;
    }

    ::v-deep .vjs-tree {

      .vjs-key {
        color: #0451a5;
      }

      .vjs-value {
        color: #09885a;

        &.vjs-value__string {
          color: #a31515;
        }
      }
    }
  }
</style>
