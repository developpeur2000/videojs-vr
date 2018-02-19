import replace from 'rollup-plugin-replace';

export default function(options) {

  return replace(Object.assign({
    'include': ['node_modules/three/examples/js/**'],
    'delimiters': ['', ''],
    'THREE.VRControls =': 'var VRControls;\nmodule.exports = VRControls =',
    'THREE.VRControls': 'VRControls',

    'THREE.VREffect =': 'var VREffect;\nmodule.exports = VREffect =',
    'THREE.VREffect': 'VREffect',

    'THREE.OrbitControls =': 'var OrbitControls;\nmodule.exports = OrbitControls =',
    'THREE.OrbitControls': 'OrbitControls'
  }, options || {}));
}

