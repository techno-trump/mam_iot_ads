namespace $.$$ {
	export class $ayk_iot_ads_composition extends $.$ayk_iot_ads_composition {
		// @ $mol_mem
		// current_frame_data(next: number | undefined) {
		// 	return next;
		// }
		// @ $mol_wire_plex
		// current_frame<Field extends keyof $.$t_frame_data>(field: Field, value?: $.$t_frame_data[Field]): $.$t_frame_data[Field] {
		// 	const current = $mol_mem_cached(() => this.current_frame(field, value));
		// 	return current || ({} as $.$t_frame_data)[field];
		// }
		uri() {
			console.log('uri')
			return window.location.href;
		}
		sub() {
			console.log( 'sub composition' )
			return [this.Frame(0), this.Frame(1)];
		}
	}
}
