namespace $ {
	export type $ayk_iot_ads_player_widget_type = "video" | "image" | "html" | "list" | "API";
	export type $ayk_iot_ads_player_widget_meta<type extends $ayk_iot_ads_player_widget_type, slide extends boolean = false> = {
		order: number;
		element_id: string;
		type: type;
		position: [number, number, number, number];
		elements: type extends "list" ? $ayk_iot_ads_player_widget_meta<any, true>[] : never;
		change: slide extends true ? string : never;
		duration: slide extends true ? number : never;
		timeout: type extends "API" ? slide extends true ? number : never : never;
		default_content: type extends "API" ? string : never;
		url: type extends "video" | "image" | "API" ? string : never;
	};
	export type $ayk_iot_ads_player_meta = {
		device_id: string;
		screen_size: [number, number];
		expiration: number;
		version: number;
		elements: $ayk_iot_ads_player_widget_meta<any>[]
	};
}
namespace $.$$ {
	export class $ayk_iot_ads_player extends $.$ayk_iot_ads_player {
		// @ $mol_mem
		// meta_string() {
		// 	return JSON.stringify(this.meta());
		// }
	}
}
