import './Form.css';

export function Form() {
    return (
        <div class="column right-column">
                    <h2>Have any question?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur ullam quos alias, omnis aut excepturi quis aspernatur soluta necessitatibus sit nisi fuga labore optio voluptate, beatae eum velit tempore.</p>
                   <form class="form" action=""/>
                    <label for="name">Name</label>
                    <input id="name" type="text" placeholder="Name" autocomplete="name" required/>
                    <label for="email">Email</label>
                    <input id="email" type="email" placeholder="Surname" autocomplete="email" required/>
                    <label for="message">Message</label>
                    <textarea itemid="message" name="" id="message" placeholder="Message" required></textarea>
                  
        </div>
    )
}