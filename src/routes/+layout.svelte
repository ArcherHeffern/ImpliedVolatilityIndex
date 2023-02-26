<script>
    import Header from '../lib/Header.svelte'
    import Footer from '../lib/Footer.svelte'
    import './styles.css'
</script>

<div class="app">
    <header>
        <Header/>
    </header>
    <main>
        <slot/>
    </main>
    <footer>
        <Footer/>
    </footer>
</div>