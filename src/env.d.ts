/// <reference types="react-scripts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_KEY: string
      REACT_APP_DATA_VERSION: string
      REACT_APP_DATA_REPO: string
      NODE_ENV: 'development' | 'production'
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }
