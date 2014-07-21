var assert         = require('assert')
var React          = require('react')
var ReactAddons    = require('react/addons')
var ReactTestUtils = React.addons.TestUtils

describe('My Component', function() {

    it('should render an input', function(done) {
        var _tree = render({}, function() {
            var __input = document.querySelectorAll('input')
            var _input  = ReactTestUtils.findRenderedDOMComponentWithTag(_tree, 'input')
            assert(false)
        })
    })

})