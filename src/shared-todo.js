import MainView from 'main-view';

function SharedTodo(config) {
    // This basically does nothing, as the application exposes a single top-level item, but it's conceivable an
    // application would expose multiple top-level items, and in that case this might seem less pointless.
    // Basically returns an object that respects the Ampersand view conventions.

    if (config) {
        // the application is not configurable at present (and this silences the linter, :P)
    }

    return new MainView();
}

export default SharedTodo;
