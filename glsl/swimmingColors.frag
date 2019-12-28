// inspired by
// http://www.pouet.net/prod.php?which=57245

uniform float time;
uniform float aspect;

varying vec2 vUv;

void main() {
	vec3 color;
	float l;
    float offset = time;
    vec2 pos = vUv.xy;

	for( int i=0; i<3; ++i) {

		vec2 uv = pos;

		pos-=.5;
		pos.x *= aspect;

        offset += .05;

        l = length(pos);

        uv += pos / pow(l,1.2) * ( sin(offset) ) * abs( sin( l*11. - offset*1.));
        uv *= pow(l, 1.2);

        color[i] = 0.01 / length( abs( mod( uv, 1.) -.5) );
    }

    float dist_from_center = 1.0 - length( vUv.xy - 0.5);
    dist_from_center *= dist_from_center;
	gl_FragColor = vec4(color/l * dist_from_center, 0);
}
