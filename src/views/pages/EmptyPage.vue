<template>
	<div class="p-grid">
		<div class="p-col-12">
			<Breadcrumb class="breadcrumb" :home="breadIcon" :model="breadItems"  />
		</div>
		<div class="p-col-12">
			<div class="card">
				<h1>{{ title }}</h1>
				<p>Use this page to start from scratch and place your custom content.</p>

				<p><Button label="Primary" class="p-button-raised p-button-rounded"  @click="showSuccess"  /></p>
				<p><Button label="Warning" class="p-button-warning"   @click="showWarning"  /></p>
				<p>	<Button label="Danger" class="p-button-danger" @click="showDanger" /></p>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: "Empty Page",
			breadIcon: {icon: 'pi pi-home', to: '/'},
			breadItems: [
				{label:"Empty Page"},
			]
		}
	},
	methods: {
		showSuccess(){
			this.$toast.add({severity:'success', summary: 'Mensagem Sucesso', detail:'Botão Clicado', life: 2000});
		},
		showWarning(){
			this.$toast.add({severity:'warn', summary: 'Mensagem warn', detail:'Botão Clicado', life: 2000});
		},
		showDanger(){
			this.$toast.add({severity:'error', summary: 'Mensagem error', detail:'Botão Clicado', life: 2000});
		}
	}
}
</script>

<style scoped>

</style>