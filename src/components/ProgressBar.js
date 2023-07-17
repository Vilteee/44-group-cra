import './ProgressBar.css';

export function ProgressBar () {
    return (
        <section class="container">
            <div class="row">
                <div class="column">
                    <h2>About startup</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugit quas quos commodi minima voluptatem, sed odit tempore modi excepturi aliquam qui quaerat impedit alias sit numquam corporis recusandae cupiditate.</p>
                    <div class="bar-container">

                        <div class="progress-bar">
                            <div class="top">
                                <div class="label">UX Design</div>
                                <div class="value">90%</div>
                            </div>
                            <div class="bottom">
                                <div class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <div class="top">
                                <div class="label">Web Design</div>
                                <div class="value">86%</div>
                        </div>
                        <div class="bottom">
                            <div style={{width: '86%'}} class="progress">
                                <div class="bar"></div>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="top">
                            <div class="label">Web Development</div>
                            <div class="value">50%</div>
                        </div>
                        <div class="bottom">
                            <div style={{width: '50%'}} class="progress">
                                <div class="bar"></div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
             </div>
        </section>

    )
}