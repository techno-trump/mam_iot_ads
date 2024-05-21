namespace $ {
	export class $ayk_iot_ads_page extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Composition
		 * 	<= Player
		 * ```
		 */
		sub() {
			return [
				this.Composition(),
				this.Player()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Composition $ayk_iot_ads_composition
		 * ```
		 */
		@ $mol_mem
		Composition() {
			const obj = new this.$.$ayk_iot_ads_composition()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Player $ayk_iot_ads_player meta <= player_meta
		 * ```
		 */
		@ $mol_mem
		Player() {
			const obj = new this.$.$ayk_iot_ads_player()
			
			obj.meta = () => this.player_meta()
			
			return obj
		}
	}
	
}

