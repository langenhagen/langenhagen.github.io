precision highp float;

varying float noiseVal;
varying float vBrightness;

void main() {
    gl_FragColor = vec4( noiseVal + 0.0,
                         noiseVal*2.0,
                         noiseVal*3.0,
                         1) * vBrightness;
}
