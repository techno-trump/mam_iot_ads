namespace $ {
	export class $ayk_iot_ads_player extends $mol_view {
		
		/**
		 * ```tree
		 * meta $ayk_iot_ads_player_meta
		 * ```
		 */
		@ $mol_mem
		meta() {
			const obj = new this.$.$ayk_iot_ads_player_meta()
			
			return obj
		}
		
		/**
		 * ```tree
		 * sub / <= Player_title
		 * ```
		 */
		sub() {
			return [
				this.Player_title()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Player_title $mol_paragraph title \Player
		 * ```
		 */
		@ $mol_mem
		Player_title() {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => "Player"
			
			return obj
		}
	}
	
}

