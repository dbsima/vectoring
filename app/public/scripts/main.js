var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var ReactDropzone = require('react-dropzone');

var Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    NavDropdown = ReactBootstrap.NavDropdown,
    MenuItem = ReactBootstrap.MenuItem,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Thumbnail = ReactBootstrap.Thumbnail,
    Button = ReactBootstrap.Button,
    FormGroup = ReactBootstrap.FormGroup,
    FormControl = ReactBootstrap.FormControl;


var NavbarClass = React.createClass({
    render: function() {
        return (
            <Navbar className="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">designai</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
});


var SidebarClass = React.createClass({
    render: function() {
        return (
            <Row className="sidebar">
                <Col md={6}>
                    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                            <Button bsStyle="primary" bsSize="xs"> Button</Button>&nbsp;
                            <Button bsStyle="default" bsSize="xs">Button</Button>
                        </p>
                    </Thumbnail>
                 </Col>
                 <Col md={6}>
                    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                            <Button bsStyle="primary" bsSize="xs"> Button</Button>&nbsp;
                            <Button bsStyle="default" bsSize="xs">Button</Button>
                        </p>
                    </Thumbnail>
                 </Col>
                 <Col md={6}>
                    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                            <Button bsStyle="primary" bsSize="xs"> Button</Button>&nbsp;
                            <Button bsStyle="default" bsSize="xs">Button</Button>
                        </p>
                    </Thumbnail>
                 </Col>
                 <Col md={6}>
                    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                            <Button bsStyle="primary" bsSize="xs"> Button</Button>&nbsp;
                            <Button bsStyle="default" bsSize="xs">Button</Button>
                        </p>
                    </Thumbnail>
                 </Col>
                 <Col md={6}>
                    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                            <Button bsStyle="primary" bsSize="xs"> Button</Button>&nbsp;
                            <Button bsStyle="default" bsSize="xs">Button</Button>
                        </p>
                    </Thumbnail>
                 </Col>
                 <Col md={6}>
                    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                            <Button bsStyle="primary" bsSize="xs"> Button</Button>&nbsp;
                            <Button bsStyle="default" bsSize="xs">Button</Button>
                        </p>
                    </Thumbnail>
                 </Col>
                 <Col md={6}>
                    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                            <Button bsStyle="primary" bsSize="xs"> Button</Button>&nbsp;
                            <Button bsStyle="default" bsSize="xs">Button</Button>
                        </p>
                    </Thumbnail>
                 </Col>
                 <Col md={6}>
                    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                            <Button bsStyle="primary" bsSize="xs"> Button</Button>&nbsp;
                            <Button bsStyle="default" bsSize="xs">Button</Button>
                        </p>
                    </Thumbnail>
                 </Col>
            </Row>
        );
    }
});

var SVG = React.createClass({
    // render static SVG
    // TODO: can I avoid using this.props.svg ?!
    render: function() {
        console.log('render SVG');
        return (
            <div className="svg" dangerouslySetInnerHTML={{ __html: this.props.svg }} />
        );
    }
});

var Dropzone = React.createClass({
    getInitialState: function () {
        return {
            file: [],
            file_content: ''
        };
    },
    onDrop: function (files) {
        this.setState({
            file: files[0],
        });

        // Upload file
        var fd = new FormData();    
        fd.append('file', files[0]);
        $.ajax({
            url: '/api/1.0/files/upload',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data){
                console.log(data);
                // TODO: check success status
                this.setState({
                    file_content: data['data']
                });
            }.bind(this),                                                
            error: function(xhr, status, err) {                                                                                           
                console.error(status);   
            }.bind(this)
        });
    },
    render: function () {
        console.log('render Dropzone');
        return (
            <div>
                <ReactDropzone onDrop={this.onDrop} multiple={false} className="dropzone" accept="image/jpeg, image/png, image/svg+xml" >
                    <div className="text-center">Drop your image here, or click to select the image to upload.</div>
                </ReactDropzone>

                <SVG svg={this.state.file_content} />
            </div>
        );
    },
    componentDidUpdate: function() {
        // TODO: we have the rendered SVG. We can now play with it.
        console.log('Dropzone - componentDidUpdate');
        var svg = document.getElementsByTagName('svg');
        console.log(svg);
    }
});

var GridClass = React.createClass({
    render: function() {
        return (
            <Grid className="main-grid">
                <Row>
                     <Col md={4}>
                        <SidebarClass />
                     </Col>
                     <Col md={8}>
                        <Dropzone />
                     </Col>
                </Row>
            </Grid>
        );
    }
});


var Content = React.createClass({
    render: function() {
        return (
            <div className="content">
                <NavbarClass />
                <GridClass />
            </div>
        );
    }
});


ReactDOM.render(
    <Content />,
    document.getElementById('content')
);

