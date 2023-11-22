import './home.css'


function Home() {
    return (
        <body class="d-flex text-center text-white bg-dark">
            <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header class="mb-auto">
                    <div>
                        <h3 class="float-md-right mb-0"></h3>
                        <nav class="nav nav-masthead justify-content-center float-md-right">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="/gallery">Gallery</a>
                            <a class="nav-link" href="/login">Login</a>
                            <a class="nav-link" href="/register">Register</a>
                            <a class="nav-link" href="/logout">Logout</a>
                         </nav>
                    </div>
                </header>
                <main class="px-3">
                        <h1><a href="/donate" class="btn btn-lg btn-secondary font-weight-bold border-white bg-dark">Donate Now</a>
                        </h1>
                </main>



                    </div>
                </body>

                );
}

                export default Home;
