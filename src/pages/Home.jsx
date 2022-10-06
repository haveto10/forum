import React from 'react';
import '../home.css';

function Home() {
    return (
        <div className='body'>
            <div className='contenedor'>
                <h2>Login</h2>
                <form id="forma" name="forma" method="POST">
                    <div class="elemento">
                        <label for="usuario">User</label>
                        <input type="text" id="usuario" name="usuario" required="true"/>
                    </div>
                    <div class="elemento">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required="true"/>
                    </div>
                    <div class="elemento">
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Home;