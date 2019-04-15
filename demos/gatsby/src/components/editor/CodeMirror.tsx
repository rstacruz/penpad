import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import { Controlled as CodeMirror } from 'react-codemirror2'

// This will fail in server-side rendering.
if (typeof navigator !== 'undefined') {
  /* tslint:disable */
  // @ts-ignore
  require('codemirror/mode/jsx/jsx')
  /* tslint:enable */
}

/**
 * Just a simple shim file to load all CodeMirror-related things
 */

export default CodeMirror
