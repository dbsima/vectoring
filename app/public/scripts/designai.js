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


var UploadFileForm = React.createClass({
    render: function() {
        return (
            <form className="upload-file">
                <FormGroup>
                    <FormControl type="file" bsClass="form-control" />
                </FormGroup>
                <Button type="submit">Upload</Button>
            </form>
        );
    }
});

var NavbarClass = React.createClass({
    render: function() {
        return (
            <Navbar className="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">designai</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <UploadFileForm />
                    </Navbar.Form>
                </Navbar.Collapse>
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


var GridClass = React.createClass({
    render: function() {
        return (
            <Grid className="main-grid">
                <Row>
                     <Col md={4}>
                        <SidebarClass />
                     </Col>
                     <Col md={8}>
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

