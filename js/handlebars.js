import runtime from 'handlebars/lib/handlebars.runtime';

// Compiler imports
import AST from 'handlebars/lib/handlebars/compiler/ast';
import { parser as Parser, parse } from 'handlebars/lib/handlebars/compiler/base';
import { Compiler, compile, precompile } from 'handlebars/lib/handlebars/compiler/compiler';
import JavaScriptCompiler from 'handlebars/lib/handlebars/compiler/javascript-compiler';
import Visitor from 'handlebars/lib/handlebars/compiler/visitor';

import noConflict from 'handlebars/lib/handlebars/no-conflict';

let _create = runtime.create;
function create() {
  let hb = _create();

  hb.compile = function(input, options) {
    return compile(input, options, hb);
  };
  hb.precompile = function(input, options) {
    return precompile(input, options, hb);
  };

  hb.AST = AST;
  hb.Compiler = Compiler;
  hb.JavaScriptCompiler = JavaScriptCompiler;
  hb.Parser = Parser;
  hb.parse = parse;

  return hb;
}

let inst = create();
inst.create = create;

noConflict(inst);

inst.Visitor = Visitor;

inst['default'] = inst;

export default inst;
