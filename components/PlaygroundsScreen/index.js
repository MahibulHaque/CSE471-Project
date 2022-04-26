import Image from "next/image";
import React from "react";
import {
  Card,
  Container,
  GridContainer,
  TextContainer,
} from "./PlaygroundScreenElements";
import Link from "next/link";

const PlayGroundsScreen = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Playgrounds</h1>
        <p>
          Code and run your own experiments! Playground snippets bring you a
          real development environment without the hassle of setting it all up.
        </p>
      </TextContainer>
      <GridContainer>
        <Link href="/playgrounds/c" passHref>
          <Card>
            <div className="image__holder">
              <Image src="/images/c.svg" width={40} height={40} />
            </div>
            <div>
              <p>C Playground</p>
              <h2>C</h2>
            </div>
          </Card>
        </Link>
        <Link href="/playgrounds/c++" passHref>
          <Card>
            <div className="image__holder">
              <Image src="/images/c++.svg" width={40} height={40} />
            </div>
            <div>
              <p>C++ Playground</p>
              <h2>C++</h2>
            </div>
          </Card>
        </Link>
        <Link href="/playgrounds/python" passHref>
          <Card>
            <div className="image__holder">
              <Image src="/images/python.png" width={40} height={40} />
            </div>
            <div>
              <p>Python Playground</p>
              <h2>Python</h2>
            </div>
          </Card>
        </Link>
        <Link href="/playgrounds/nodejs">
          <Card>
            <div className="image__holder">
              <Image src="/images/nodejs.png" width={40} height={40} />
            </div>
            <div>
              <p>Node.js 14 Playground</p>
              <h2>Node.js</h2>
            </div>
          </Card>
        </Link>
        <Link href="/playgrounds/csharp">
          <Card>
            <div className="image__holder">
              <Image src="/images/csharp.svg" width={40} height={40} />
            </div>
            <div>
              <p>C# Playground</p>
              <h2>C#</h2>
            </div>
          </Card>
        </Link>
        <Link href="/playgrounds/bash" passHref>
          <Card>
            <div className="image__holder">
              <Image src="/images/bash.png" width={40} height={40} />
            </div>
            <div>
              <p>Bash Playground</p>
              <h2>Bash</h2>
            </div>
          </Card>
        </Link>
        <Link href="/playgrounds/julia" passHref>
          <Card>
            <div className="image__holder">
              <Image src="/images/julia.svg" width={40} height={40} />
            </div>
            <div>
              <p>Julia Playground</p>
              <h2>Julia</h2>
            </div>
          </Card>
        </Link>
      </GridContainer>
    </Container>
  );
};

export default PlayGroundsScreen;
