import React, {Component} from 'react';
import './todo.sass';


export default class Todo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {fadein} = this.props;
        const FadeInAnimation = fadein;
        return(
            <section className="content">
                <div className='todo'>
                    <FadeInAnimation>
                        <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g clip-rule="evenodd" fill-rule="evenodd"><path d="m301.088 196.637h-89.842-201.226v294.14h491.96v-294.14z" fill="#ffee80"/><circle cx="253.122" cy="41.262" fill="#80b6ff" r="20.039"/></g><g><path d="m491.961 186.617h-123.582s-89.106-160.153-89.167-160.253c-5.187-9.048-14.935-15.161-26.09-15.161-11.143 0-20.882 6.1-26.073 15.131-.067.11-89.184 160.283-89.184 160.283h-117.826c-11.049 0-20.039 8.99-20.039 20.04v274.101c0 11.049 8.99 20.039 20.039 20.039h471.922c11.049 0 20.039-8.99 20.039-20.039v-274.101c0-11.05-8.99-20.04-20.039-20.04zm-238.839-155.374c5.525 0 10.02 4.495 10.02 10.02s-4.495 10.02-10.02 10.02-10.02-4.495-10.02-10.02 4.495-10.02 10.02-10.02zm238.839 449.514h-471.922v-274.1h191.206c5.534 0 10.02-4.486 10.02-10.02s-4.486-10.02-10.02-10.02h-50.45l69.803-125.482c5.512 6.239 13.564 10.185 22.524 10.185s17.011-3.945 22.523-10.184l69.803 125.481h-44.36c-5.534 0-10.02 4.486-10.02 10.02s4.486 10.02 10.02 10.02h190.873z"/><path d="m297.92 261.767c0-5.534-4.486-10.02-10.02-10.02s-10.02 4.486-10.02 10.02v57.25c0 5.534 4.486 10.02 10.02 10.02s10.02-4.486 10.02-10.02v-8.082l15.852 15.293c1.945 1.876 4.452 2.809 6.956 2.809 2.624 0 5.246-1.025 7.212-3.063 3.842-3.982 3.728-10.326-.254-14.168l-23.339-22.517 21.13-19.423c4.074-3.745 4.341-10.083.596-14.157-3.745-4.075-10.083-4.341-14.157-.596l-13.996 12.865z"/><path d="m51.527 320.462c.095.479.225.95.387 1.409 1.602 4.51 5.879 7.525 10.659 7.525h.077c4.811-.033 9.084-3.115 10.633-7.67.03-.087.058-.175.085-.262l7.839-25.325 7.803 25.328c.042.136.086.27.134.404 1.602 4.51 5.879 7.525 10.659 7.525h.078c4.811-.033 9.084-3.115 10.632-7.67.141-.415.255-.839.341-1.269l11.199-56.268c1.08-5.428-2.444-10.703-7.871-11.783-5.429-1.079-10.703 2.444-11.783 7.871l-4.423 22.226-7.186-23.325c-1.629-5.288-7.234-8.253-12.525-6.625-3.511 1.082-5.987 3.92-6.786 7.251l-7.029 22.709-4.416-22.329c-1.074-5.429-6.345-8.957-11.773-7.885-5.429 1.074-8.959 6.345-7.885 11.773z"/><path d="m224.543 329.036c5.534 0 10.02-4.486 10.02-10.02v-8.618l13.411 15.238c1.981 2.25 4.746 3.4 7.525 3.4 2.351 0 4.712-.823 6.616-2.498 4.154-3.656 4.557-9.987.902-14.141l-11.831-13.442c8.483-4.076 14.329-12.543 14.329-22.309 0-13.729-11.547-24.898-25.74-24.898h-15.213c-.003 0-.006 0-.009 0s-.006 0-.009 0c-5.534 0-10.02 4.486-10.02 10.02v57.25c-.001 5.532 4.485 10.018 10.019 10.018zm15.231-57.249c3.037 0 5.701 2.271 5.701 4.859s-2.664 4.859-5.701 4.859c-1.271 0-3.143.006-5.141.014-.008-1.901-.018-7.727-.023-9.732z"/><path d="m164.932 251.748c-21.309 0-38.644 17.336-38.644 38.644s17.336 38.644 38.644 38.644 38.644-17.336 38.644-38.644-17.335-38.644-38.644-38.644zm0 57.249c-10.259 0-18.605-8.346-18.605-18.605s8.346-18.605 18.605-18.605 18.605 8.346 18.605 18.605c.001 10.259-8.346 18.605-18.605 18.605z"/><path d="m415.311 330.337c5.534 0 10.02-4.486 10.02-10.02v-25.001l20.376 29.505c2.787 4.027 7.665 5.794 12.144 4.395 4.615-1.442 7.597-5.692 7.596-10.926l-.535-55.32c-.054-5.533-4.59-9.982-10.116-9.922-5.533.053-9.976 4.583-9.922 10.116l.248 25.544-21.566-31.228c-2.491-3.608-7.041-5.176-11.227-3.872-4.186 1.305-7.038 5.181-7.038 9.566v57.143c.001 5.534 4.486 10.02 10.02 10.02z"/><path d="m377.224 330.337c5.534 0 10.02-4.486 10.02-10.02v-57.25c0-5.534-4.486-10.02-10.02-10.02s-10.02 4.486-10.02 10.02v57.25c0 5.534 4.486 10.02 10.02 10.02z"/><path d="m346.724 442.271h20.125c5.534 0 10.02-4.486 10.02-10.02s-4.486-10.02-10.02-10.02h-10.105v-3.842h8.621c5.534 0 10.02-4.486 10.02-10.02s-4.486-10.02-10.02-10.02h-8.621v-3.841h10.105c5.534 0 10.02-4.486 10.02-10.02s-4.486-10.02-10.02-10.02h-20.125c-5.534 0-10.02 4.486-10.02 10.02v47.762c0 5.535 4.486 10.021 10.02 10.021z"/><path d="m261.951 398.35h-12.13c-5.534 0-10.02 4.486-10.02 10.02 0 5.363 4.214 9.743 9.512 10.007-1.588 2.315-4.124 4.075-8.168 4.075-7.765 0-14.082-6.317-14.082-14.082 0-7.764 6.317-14.081 14.082-14.081 1.583 0 3.132.258 4.604.767 5.229 1.81 10.936-.964 12.744-6.195 1.809-5.229-.965-10.935-6.195-12.744-3.583-1.239-7.335-1.867-11.153-1.867-18.814 0-34.121 15.306-34.121 34.12s15.307 34.121 34.121 34.121c18.149 0 30.824-14.031 30.824-34.121.002-5.534-4.484-10.02-10.018-10.02z"/><path d="m390.991 411.457c.443.289.908.542 1.39.757.284.127 7.039 3.134 14.638 5.937 2.4.885 3.439 1.834 3.728 2.239-.259.589-1.621 2.062-4.446 2.062-5.456 0-8.554-2.95-9.373-3.854-3.716-4.101-10.053-4.412-14.153-.697-4.101 3.716-4.412 10.052-.697 14.153 6.011 6.633 14.84 10.437 24.222 10.437 12.096 0 22.28-7.867 24.215-18.705 2.266-12.691-7.506-21.095-16.562-24.435-4.522-1.668-8.807-3.454-11.268-4.507.145-.075.331-.152.567-.223 4.354-1.311 10.118 1.662 11.81 2.816 4.509 3.153 10.723 2.081 13.911-2.412 3.203-4.512 2.142-10.767-2.37-13.97-1.458-1.035-14.655-9.982-29.132-5.621-8.159 2.458-13.94 8.951-15.088 16.945-1.089 7.595 2.208 14.906 8.608 19.078z"/><path d="m451.429 375.432c-8.159 2.458-13.94 8.951-15.088 16.945-1.091 7.597 2.207 14.908 8.606 19.08.443.289.908.542 1.39.757.284.127 7.039 3.134 14.638 5.937 2.4.885 3.439 1.834 3.728 2.239-.259.589-1.621 2.062-4.446 2.062-5.456 0-8.554-2.95-9.373-3.854-3.717-4.101-10.053-4.411-14.153-.696-4.1 3.716-4.412 10.053-.696 14.153 6.011 6.633 14.84 10.436 24.222 10.436 12.096 0 22.28-7.867 24.215-18.705 2.266-12.691-7.506-21.095-16.562-24.435-4.522-1.668-8.807-3.454-11.268-4.507.145-.075.331-.152.567-.223 4.356-1.31 10.117 1.661 11.81 2.816 4.506 3.151 10.722 2.081 13.912-2.412 3.203-4.512 2.142-10.767-2.371-13.97-1.458-1.036-14.654-9.981-29.131-5.623z"/><path d="m127.97 396.796c0-12.432-10.432-22.546-23.256-22.546 0 0-13.766.046-13.802.049-5.075.492-9.042 4.767-9.042 9.97v48.202c0 5.534 4.486 10.02 10.02 10.02s10.02-4.486 10.02-10.02v-3.06l8.52 9.68c1.981 2.25 4.746 3.4 7.525 3.4 2.351 0 4.712-.823 6.616-2.498 4.154-3.656 4.557-9.987.902-14.141l-8.642-9.818c6.675-3.968 11.139-11.107 11.139-19.238zm-23.256-2.507c1.812 0 3.217 1.348 3.217 2.507 0 1.16-1.405 2.508-3.217 2.508-.726 0-1.685.002-2.752.006-.003-.975-.007-3.991-.009-5.021z"/><path d="m327.256 396.796c0-12.432-10.432-22.546-23.255-22.546 0 0-13.767.046-13.803.049-5.075.492-9.042 4.767-9.042 9.97v48.202c0 5.534 4.486 10.02 10.02 10.02s10.02-4.486 10.02-10.02v-3.06l8.52 9.68c1.981 2.25 4.746 3.4 7.525 3.4 2.351 0 4.712-.823 6.616-2.498 4.154-3.656 4.557-9.987.902-14.141l-8.641-9.818c6.674-3.968 11.138-11.106 11.138-19.238zm-23.256-2.507c1.811 0 3.216 1.348 3.216 2.507 0 1.16-1.405 2.508-3.216 2.508-.726 0-1.685.002-2.752.006-.003-.975-.007-3.991-.009-5.021z"/><path d="m50.661 374.25h-13.422c-5.453 0-10.02 4.566-10.02 10.02v48.202c0 5.534 4.486 10.02 10.02 10.02s10.02-4.486 10.02-10.02v-10.969c1.323-.005 2.528-.008 3.402-.008 13.172 0 23.888-10.597 23.888-23.622 0-13.027-10.716-23.623-23.888-23.623zm0 27.205c-.867 0-2.051.003-3.36.008-.005-1.403-.011-5.693-.014-7.175h3.374c2.05 0 3.849 1.674 3.849 3.583s-1.799 3.584-3.849 3.584z"/><path d="m167.267 374.25c-18.814 0-34.121 15.306-34.121 34.12s15.307 34.121 34.121 34.121 34.12-15.307 34.12-34.121-15.306-34.12-34.12-34.12zm0 48.202c-7.765 0-14.082-6.317-14.082-14.082 0-7.764 6.317-14.081 14.082-14.081 7.764 0 14.081 6.317 14.081 14.081 0 7.765-6.317 14.082-14.081 14.082z"/><circle cx="256" cy="196.637" r="10.02"/></g></g></svg>
                    </FadeInAnimation>
                </div>
            </section>
        )
    }
}