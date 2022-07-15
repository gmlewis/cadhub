import { DefaultKernelExport } from './common'
import type { CadPackageType } from 'src/components/CadPackage/CadPackage'

import openscad from './openScad/openScadController'
import openScadGuide from 'src/helpers/cadPackages/openScad/userGuide.md'
import openScadInitialCode from 'src/helpers/cadPackages/openScad/initialCode.scad'

import cadquery from './cadQuery/cadQueryController'
import cadQueryGuide from 'src/helpers/cadPackages/cadQuery/userGuide.md'
import cadQueryInitialCode from 'src/helpers/cadPackages/cadQuery/initialCode.py'

import jscad from './jsCad/jsCadController'
import jsCadGuide from 'src/helpers/cadPackages/jsCad/userGuide.md'
import jsCadInitialCode from 'src/helpers/cadPackages/jsCad/initialCode.jscad.js'

import curv from './curv/curvController'
import curvGuide from 'src/helpers/cadPackages/curv/userGuide.md'
import curvInitialCode from 'src/helpers/cadPackages/curv/initialCode.curv'

import irmf from './irmf/irmfController'
import irmfGuide from 'src/helpers/cadPackages/irmf/userGuide.md'
import irmfInitialCode from 'src/helpers/cadPackages/irmf/initialCode.irmf'

export const cadPackages: { [key in CadPackageType]: DefaultKernelExport } = {
  openscad,
  cadquery,
  jscad,
  curv,
  irmf,
}

export const initGuideMap: { [key in CadPackageType]: string } = {
  openscad: openScadGuide,
  cadquery: cadQueryGuide,
  jscad: jsCadGuide,
  curv: curvGuide,
  irmf: irmfGuide,
  INIT: '',
}

export const initCodeMap: { [key in CadPackageType]: string } = {
  openscad: openScadInitialCode,
  cadquery: cadQueryInitialCode,
  jscad: jsCadInitialCode,
  curv: curvInitialCode,
  irmf: irmfInitialCode,
  INIT: '',
}
