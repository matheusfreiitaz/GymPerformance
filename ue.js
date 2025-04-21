<script type="module">
    const { createApp, ref } = Vue;

    createApp({
        setup() {
            const modoEscuro = ref(false);

            const alternarModoEscuro = () => {
                modoEscuro.value = !modoEscuro.value;
                document.documentElement.classList.toggle('dark');
            };

            return {
                modoEscuro,
                alternarModoEscuro
            };
        }
    }).mount('#app');
</script>
