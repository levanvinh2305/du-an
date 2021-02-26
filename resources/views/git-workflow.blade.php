<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Git Workflow - Leo Tech | Portfolio</title>
        <link href="{{ asset('css/style.css') }}" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <script src="{{ asset('js/main.js') }}"></script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131735434-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-131735434-1');
        </script>
    </head>
    <body>
    <header>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="logo">
                            <a class="navbar-brand" href="{{ route('home') }}">
                                <img src="{{ asset('img/logo.png') }}">
                            </a>
                        </div>
                    </div>
                    <div class="col-9">
                        <nav id="navbar-leo" class="navbar navbar-expand-lg navbar-light bg-light">
                            <!-- <div class="logo">
                                <a class="navbar-brand" href="#">
                                    <img src="{{ asset('img/logo.png') }}">
                                </a>
                            </div> -->
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="{{ url('/') }}">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#About">About</a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="{{ route('blog') }}"">Blog</a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#Courses">Courses</a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="{{ route('contact') }}">Contact</a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="http://tottistore.com">Shop</a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#PhuThuFood">Food</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <main class="main git-workflow-page">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="title">
                            <h1>Git Workflow</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="content">
                            <p>A Git Workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner. Git workflows encourage users to leverage Git effectively and consistently. Git offers a lot of flexibility in how users manage changes.</p>
                            <h2>Git branches (naming convention):</h2>
                            <ul>
                            <li>master</li>
                            <ul>
                                <li>v{x.y.z}</li>
                                <li>develop
                                    <ul>
                                    <li>feature/{package-name}</li>
                                    <li>feature/{JIRA-ID}-{task-summary}</li>
                                    <li>task/{JIRA-ID}-{task-summary}</li>
                                    <li>bug-fix/{JIRA-ID}-{task-summary}</li>
                                    </ul>
                                </li>
                                <li>hot-fix/{JIRA-ID}-{task-summary}</li>
                                <li>staging</li>
                            </ul>
                            </ul>

                            <h2>Git workflows:</h2>

                            <h3>For feature/task implementation:</h3>
                            <ul>
                                <li>Devs create "develop" branch from "master" branch</li>
                                <li>Devs config "name &amp; email" before do anything on git</li>
                                <li>Devs who work on specific feature create branch "feature/{JIRA-ID}-{task-summary}" or "feature/{task-summary}" or "feature/{package-name}" from "develop" branch</li>
                                <li>Devs work together on "feature" branch, after finish, Devs pull newest code, merge with "develop" branch</li>
                                <li>After finish feature, devs update CHANGELOG (if needed) and review code cross &amp; squash code committed after finish branch and create MR to "develop" branch and assign to Leader (or Senior)</li>
                                <li>Leader (or Senior) reviews and merges "feature" branch to "develop" branch</li>
                                <li>When delivery on production/staging server, Leader create MR and merge from "develop" to "master/staging" branch</li>
                                <li>Leader create tag from "master" branch if needed (based on CHANGELOG)</li>
                            </ul>

                            <h3>For bug-fixes implementation:</h3>
                            <p>Same as feature implement work-flow above</p>

                            <h3>For hot-fixes:</h3>
                            <ul>
                                <li>Hot-fix will be applied after each time deliver on production, then there are issues/bugs need to fix asap.</li>
                                <li>Devs create "hot-fix/{JIRA-ID}-{task-summary}" or "hot-fix/{task-summary}" branch from "master" branch</li>
                                <li>Devs fix bug and commit/push on their branch and test on Staging or Test environment</li>
                                <li>When delivery Devs will merge to "master" branch from "hot-fix/{JIRA-ID}-{task-summary}" branch</li>
                                <li>Devs will merge to "develop" branch.</li>
                            </ul>

                            <h3>For testing (Test environment):</h3>
                            <ul>
                                <li>Use "develop" branch to test at test environment</li>
                            </ul>

                            <h3>For staging (Staging environment):</h3>
                            <ul>
                                <li>Use "staging" branch at staging environment</li>
                            </ul>

                            <h3>For live (Production environment)</h3>
                            <ul>
                                <li>Use "master" branch at production environment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-md-auto">
                        <div class="follow">
                            <a href="https://www.facebook.com/helloleotech/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="https://twitter.com/helloleotech"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="https://www.instagram.com/helloleotech/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/helloleotech/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="https://www.youtube.com/channel/UCBdv9O5dJI8WKxjoRPo9_lw?view_as=subscriber"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        </div>
                        <div class="copyright">
                            COPYRIGHT © 2020 LEO TECH ALL RIGHTS RESERVED
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="clean-code-popup">
            <a href="{{ route('contact') }}">Join Clean Code Saturday</a>
        </div>
    </body>
</html>
