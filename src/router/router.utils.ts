import { routerLog } from "../services";
import {
  MULTY_PATHS,
  PATHS,
  PATHS_SUB,
  multyPathsKeyNames,
  pathsKeyNames,
  subPathsKeyNames,
} from "./router.config";

export const createNavigationPath = (
  mainPath: multyPathsKeyNames | pathsKeyNames,
  subPath?: subPathsKeyNames
) => {
  if (!mainPath) {
    routerLog.addError("Can't create navigation path without mainPath");
    return PATHS.LOADER;
  }

  const isMainPathWithSubPath = MULTY_PATHS[mainPath as multyPathsKeyNames];

  if (isMainPathWithSubPath) {
    if (!subPath) {
      routerLog.addError(
        "Can't create navigation path with multy mainPath without subPath"
      );
      return PATHS.LOADER;
    }

    return (
      PATHS[mainPath] + "/" + PATHS_SUB[mainPath as multyPathsKeyNames][subPath]
    );
  }

  return PATHS[mainPath];
};
