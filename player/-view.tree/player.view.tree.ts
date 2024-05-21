namespace $ {
	export class $ayk_iot_ads_player extends $mol_view {
		
		/**
		 * ```tree
		 * meta $t_player_meta
		 * ```
		 */
		@ $mol_mem
		meta() {
			const obj = new this.$.$t_player_meta()
			
			return obj
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	\Player
		 * 	<= meta_string
		 * ```
		 */
		sub() {
			return [
				"Player",
				this.meta_string()
			] as readonly any[]
		}
	}
	
}

