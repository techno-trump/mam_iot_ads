namespace $ {
	export type $ayk_iot_ads_page_config = {
		configUri: string;
	};
}
namespace $.$$ {
	export class $ayk_iot_ads_page extends $.$ayk_iot_ads_page {
		@ $mol_mem
		static app_config() {
			return $mol_fetch.json("./ayk/iot/ads/config.json") as $ayk_iot_ads_page_config;
		}
		@ $mol_mem
		static player_meta() {
			return $mol_fetch.json(`${$ayk_iot_ads_page.app_config().configUri}?id=${$ayk_iot_ads_page.meta_id()}`) as $ayk_iot_ads_player_meta;
		}
		static meta_id() {
			return (new URLSearchParams(location.search)).get("id");
		}
		@ $mol_mem
		player_meta() {
			return $ayk_iot_ads_page.player_meta();
		}
		sub() {
			return window.self === window.top ? [this.Composition()] : [this.Player()];
		}
	}
}
