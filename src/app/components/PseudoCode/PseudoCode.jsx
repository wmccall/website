import React from 'react';

import PseudoCodeUtils from '../../utils/PseudoCodeUtils';
import PseudoElement from './PseudoElement';

const mockWord = { word: 'theGrid' };
const mockConstant = { word: 'DIGITAL_FRONTIER' };
const mockString = { word: "'break it to me'" };

const pseudoCode = code => <div className="pseudo-code">{code}</div>;

const pseudoImport = (moduleName = mockWord, packageName = mockWord) =>
  pseudoCode([
    <PseudoElement defaultType="reserved" word={{ word: 'import' }} />,
    <PseudoElement defaultType="global" word={moduleName} />,
    <PseudoElement defaultType="reserved" word={{ word: 'from' }} />,
    <PseudoElement defaultType="string" word={packageName} last />,
  ]);

const pseudoMethodCall = (methodName = mockWord, argumentName = mockWord) =>
  pseudoCode([
    <PseudoElement defaultType="reserved" word={{ word: 'bigVariableName' }} />,
    PseudoCodeUtils.equalsSign,
    <PseudoElement defaultType="method" word={methodName} />,
    PseudoCodeUtils.leftParen,
    <PseudoElement defaultType="string" word={argumentName} />,
    PseudoCodeUtils.rightParen,
    PseudoCodeUtils.semiColon,
  ]);

const pseudoStringConstDefinition = (
  pseudoConst = mockConstant,
  pseudoString = mockString,
) =>
  pseudoCode([
    <PseudoElement defaultType="reserved" word={{ word: 'const' }} />,
    <PseudoElement defaultType="constant" word={pseudoConst} />,
    PseudoCodeUtils.equalsSign,
    <PseudoElement defaultType="string" word={pseudoString} last />,
  ]);

const pseudoReturnMethod = (methodName = mockWord) =>
  pseudoCode([
    <PseudoElement defaultType="global" word={{ word: 'return' }} />,
    <PseudoElement defaultType="method" word={methodName} last />,
  ]);

const pseudoReturnString = (stringName = mockWord) =>
  pseudoCode([
    <PseudoElement defaultType="global" word={{ word: 'return' }} />,
    <PseudoElement defaultType="string" word={stringName} last />,
  ]);

export default {
  pseudoImport,
  pseudoMethodCall,
  pseudoStringConstDefinition,
  pseudoReturnMethod,
  pseudoReturnString,
};
