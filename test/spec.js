require('testdom')('<html><body></body></html>')

var assert               = require('assert')
var React                = require('react')
var ReactAddons          = require('react/addons')
var ReactTestUtils       = React.addons.TestUtils
var IgnoreUnmountedMixin = require('../index')

var WithMixin = React.createClass({
    mixins : [IgnoreUnmountedMixin],
    render : function() {
        return React.DOM.div({className:'WithClass'}, this.state.text)
    },
    getInitialState : function() {
        return { text : 'tada' }
    },
    componentDidMount : function() {
        setTimeout(function() {
            this.setState({ text : 'wuhu' })
        }.bind(this),200)
    }
})

describe('IgnoreUnmountedMixin', function() {

    // To have it fail, simply comment out the mixins

    it('should operate normally when mounted', function(done) {
        React.renderComponent(WithMixin({}), document.body, function() {
            var divs = document.querySelectorAll('.WithClass')
            assert(divs.length, 1)
            setTimeout(function() {
                React.unmountComponentAtNode(document.body)
                done()
            },300)
        })
    })

    it('should not fail with the mixin', function(done) {
        React.renderComponent(WithMixin({}), document.body, function() {
            React.unmountComponentAtNode(document.body)
            setTimeout(function() {                
                assert(true)
                done()
            },300)
        })
    })

})