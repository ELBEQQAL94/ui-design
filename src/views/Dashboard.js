import React from "react";
import { useStyles } from "../useStyles";
import Grid from "@material-ui/core/Grid";
import { LeftArrow } from "@styled-icons/boxicons-solid/LeftArrow";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Circle } from "@styled-icons/boxicons-solid/Circle";

const Dashboard = () => {
  const classes = useStyles();
  const size = "15";

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div className="segment-list-left">
            <h2>
              <span>
                <LeftArrow size={size} style={{ color: "#7B8FA5" }} />
              </span>
              Overview
            </h2>
            <h1>Today's Tasks</h1>
            <Card className="card">
              <CardActionArea>
                <CardContent>
                  <h3>
                    Literature{" "}
                    <span>
                      <Circle size={size} style={{ color: "#e4c524" }} />
                    </span>
                  </h3>
                  <p>Estimated Time: 30 minutes</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>
                    Practicing multiple choices to familairise your self with
                    physics.{" "}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className="card right-answer-card">
              <CardActionArea>
                <CardContent>
                  <h3>
                    Physics{" "}
                    <span>
                      <Circle size={size} style={{ color: "#e4c524" }} />
                    </span>
                  </h3>
                  <p>Estimated Time: 30 minutes</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>
                    Practicing multiple choices to familairise your self with
                    physics.{" "}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className="card">
              <CardActionArea>
                <CardContent>
                  <h3>
                    History{" "}
                    <span>
                      <Circle size={size} style={{ color: "#e4c524" }} />
                    </span>
                  </h3>
                  <p>Estimated Time: 2 hours</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>
                    Practicing multiple choices to familairise your self with
                    history.{" "}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className="card">
              <CardActionArea>
                <CardContent>
                  <h3>
                    Social Studies{" "}
                    <span>
                      <Circle size={size} style={{ color: "#91d99d" }} />
                    </span>
                  </h3>
                  <p>Estimated Time: 30 minutes</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>
                    Practicing multiple choices to familairise your self with
                    social studies.{" "}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="segment-list-right">
            <h2>Physics</h2>
            <Card className="card card-left">
              <CardActionArea>
                <CardContent>
                  <p>
                    A light year is defined as the distance light travels in 1
                    year. THe speed of light in 3x10 m/s. Which of the following
                    is the nearest estimate of 1 light year?{" "}
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions className="btn-container">
                <Button variant="contained" className="bg-btn">
                  <var>
                    10<sup>2</sup>
                  </var>
                  Gm
                </Button>
                <Button variant="contained" className="bg-btn right-answer">
                  <var>
                    10<sup>4</sup>
                  </var>
                  Gm
                </Button>
                <Button variant="contained" className="bg-btn">
                  <var>
                    10<sup>5</sup>
                  </var>
                  Gm
                </Button>
                <Button variant="contained" className="bg-btn">
                  <var>
                    10<sup>7</sup>
                  </var>
                  Gm
                </Button>
              </CardActions>
            </Card>
            <Card className="card card-left">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>the velocity of a moving object is given by</p>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" className="bg-btn custom-btn">
                    the area below a velocity-time graph
                  </Button>
                  <Button
                    variant="contained"
                    className="bg-btn custom-btn right-answer"
                  >
                    the area below a velocity-time graph
                  </Button>
                  <Button variant="contained" className="bg-btn custom-btn">
                    the area below a velocity-time graph
                  </Button>
                  <Button variant="contained" className="bg-btn custom-btn">
                    the area below a velocity-time graph
                  </Button>
                </Grid>
              </Grid>
            </Card>
            <Card className="card card-left">
              <CardActionArea>
                <CardContent>
                  <p>
                    Practicing multiple choices to familairise your self with
                    social studies.{" "}
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions className="btn-container">
                <Button variant="contained" className="bg-btn">
                  1n
                </Button>
                <Button variant="contained" className="bg-btn">
                  5n
                </Button>
                <Button variant="contained" className="bg-btn">
                  25n
                </Button>
                <Button variant="contained" className="bg-btn">
                  40n
                </Button>
              </CardActions>
            </Card>
            <Card className="card card-left">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>the velocity of a moving object is given by</p>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" className="bg-btn custom-btn">
                    the area below a velocity-time graph
                  </Button>
                  <Button variant="contained" className="bg-btn custom-btn">
                    the area below a velocity-time graph
                  </Button>
                  <Button variant="contained" className="bg-btn custom-btn">
                    the area below a velocity-time graph
                  </Button>
                  <Button variant="contained" className="bg-btn custom-btn">
                    the area below a velocity-time graph
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default Dashboard;
