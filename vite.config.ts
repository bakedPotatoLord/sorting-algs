import { UserConfig, } from 'vite'

import {resolve} from 'node:path'

const root = resolve(__dirname,'src')
const outDir = resolve(__dirname,'dist')

// https://vitejs.dev/config/
export default <UserConfig>{
  root,
  //base:'/sorting-algs/',
  build:{
    outDir,
    emptyOutDir:true,
  },
}
