<!DOCTYPE html>
<html>

    <head>
        <title>Code Warrior</title>
        
        <!-- jQuery -->
        <script type="text/javascript" src= <?php echo base_url("application/assets/js/jquery-2.1.3.min.js"); ?> ></script>
        
        
        <!-- Bootstrap -->
        <script type="text/javascript" src= <?php echo base_url("application/assets/js/bootstrap/bootstrap.min.js"); ?> ></script>
        <link rel="stylesheet" type="text/css" href= <?php echo base_url("application/assets/css/bootstrap/bootstrap.min.css"); ?> >
        
        
        <!-- Material -->
        <script type="text/javascript" src= <?php echo base_url("application/assets/js/material/material.min.js"); ?> ></script>
        <link rel="stylesheet" type="text/css" href= <?php echo base_url("application/assets/css/material/material.min.css"); ?> >
        <link rel="stylesheet" type="text/css" href= <?php echo base_url("application/assets/css/material/ripples.min.css"); ?> >
        <link rel="stylesheet" type="text/css" href= <?php echo base_url("application/assets/css/material/material-wfont.min.css"); ?> >
        
        
        <!-- App -->
        <script type="text/javascript" src= <?php echo base_url("application/assets/js/ace/ace.js"); ?> ></script>
        <link rel="stylesheet" type="text/css" href= <?php echo base_url("application/assets/css/style.css"); ?> >

        
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="bs-component">
                        <div class="navbar navbar-default">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand ripple-effect" href="javascript:void(0)">Code Warrior <div class="ripple-wrapper"></div></a>
                            </div>
                            <div class="navbar-collapse collapse navbar-responsive-collapse">
                                <form class="navbar-form navbar-left">
                                    <div class="form-control-wrapper">
                                        <input type="text" class="form-control col-lg-8 empty" placeholder="Search">
                                        <span class="material-input"></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-content">
                            <canvas id="canvas" width="500" height="500"></canvas>
                        </div>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-content" style="height:500px">
                            <div class="row" >
                                <div class="" id="editor" style="margin-left:15px"></div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <button type="button" class="btn btn-primary ripple-effect btn-raised" id="submit">Compile</button>
                        </div>
                    </div>
                
                </div>
            </div>
        
        
        </div>
        
        
        
        
        <script type="text/javascript" src= <?php echo base_url("application/assets/js/app.js"); ?> ></script>
    </body>

</html>