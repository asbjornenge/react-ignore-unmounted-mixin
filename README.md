# React IgnoreUnmounted Mixin

Ignore updates to unmounted react components.

> Because sometimes your users are faster than your api. And you're lazy.

A react component is rendered. It fires off a few ajax requests to the server. Like a good developer you have some initial state so your users can enjoy your beautiful component while waiting for the response. It's a java legacy backend, so naturally, it takes ages. The user is impatient and clicks on some cat videos that replaces/unmounts the component awaiting the ajax response. Once the ajax response is finally ready, the callback tries to update the component. But it has (as all things evetually will) been replaced by cat videos. And you are stuck with an ugly error like this:

    Invariant Violation: replaceState(...): Cannot update while unmounting component or during an existing state transition (such as within `render`).

Like the good developer you are, you should ofcourse value aborting your ajax requests under *componentWillUnmount*, but who really has the time!??

**IgnoreUnmountedMixin to the rescue!**

**IgnoreUnmountedMixin** will dirtyhack you around this issue by verifying <code>this.isMounted()</code> before calling <code>replaceState</code>. Thus checking if the component is mounted before allowing any updates to it.

## Installing

    npm install react-ignore-unmounted-mixin

## Usage

    var IgnoreUnmountedMixin = require('react-ignore-unmounted-mixin')

    var myComp = React.createClass({
        mixins : [IgnoreUnmountedMixin],
        // ...
    })

That is all!

enjoy.