import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Bullseye,
  Button,
  Card,
  CardBody,
  CardTitle,
  Content,
  Divider,
  Icon,
  Split,
  SplitItem,
  Stack,
  StackItem,
  Title,
} from "@patternfly/react-core";
import BrainIcon from "@patternfly/react-icons/dist/dynamic/icons/brain-icon";
import CodeIcon from "@patternfly/react-icons/dist/dynamic/icons/code-icon";
import ServerIcon from "@patternfly/react-icons/dist/dynamic/icons/server-icon";
import NetworkWiredIcon from "@patternfly/react-icons/dist/dynamic/icons/network-wired-icon";
import ChevronDownIcon from "@patternfly/react-icons/dist/dynamic/icons/chevron-down-icon";

import clsx from "clsx";

import "./WelcomePage.scss";

interface WorkloadOption {
  title: string;
  description: string;
  icon: ReactNode;
  badgeVariant: string;
}

const workloads: WorkloadOption[] = [
  {
    title: "Virtualization",
    description: "Optimized for running VMs alongside containers.",
    badgeVariant: "blue",
    icon: (
      <Icon size="xl">
        <ServerIcon />
      </Icon>
    ),
  },
  {
    title: "AI & Machine Learning",
    description: "Accelerated nodes for training and model serving.",
    badgeVariant: "red",
    icon: (
      <Icon size="xl">
        <BrainIcon />
      </Icon>
    ),
  },
  {
    title: "Application Development",
    description: "Standard multi-tenant clusters for microservices.",
    badgeVariant: "green",
    icon: (
      <Icon size="xl" color="red">
        <CodeIcon />
      </Icon>
    ),
  },
];

export default function WelcomePage() {
  return (
    <Stack hasGutter className="day-one-welcome">
      <StackItem className="pf-v6-u-mb-lg">
        <Stack hasGutter>
          <StackItem className="pf-v6-u-mb-md">
            <Bullseye>
              <Title headingLevel="h1" size="3xl">
                Welcome to OpenShift Management Engine
              </Title>
            </Bullseye>
          </StackItem>
          <StackItem>
            <Bullseye>
              <p className="pf-v6-u-font-size-lg">
                Let's create your first clusters. What kind of workload are you
                looking to run today?
              </p>
            </Bullseye>
          </StackItem>
        </Stack>
      </StackItem>
      <StackItem>
        <Title headingLevel="h2" size="lg">
          What workload are you looking to run today?
        </Title>
      </StackItem>
      <StackItem className="pf-v6-u-mb-lg">
        <Split hasGutter>
          {workloads.map((w) => (
            <SplitItem key={w.title} isFilled>
              <Link to="#" className="day-one-welcome__workload-card">
                <Card isClickable>
                  <CardTitle>
                    <Stack>
                      <StackItem
                        className={clsx(
                          `day-one-welcome__icon-badge day-one-welcome__icon-badge--${w.badgeVariant}`,
                          "pf-v6-u-mb-md",
                        )}
                      >
                        {w.icon}
                      </StackItem>
                      <StackItem>{w.title}</StackItem>
                    </Stack>
                  </CardTitle>
                  <CardBody>
                    <Content
                      component="p"
                      className="day-one-welcome__workload-description"
                    >
                      {w.description}
                    </Content>
                  </CardBody>
                </Card>
              </Link>
            </SplitItem>
          ))}
        </Split>
      </StackItem>
      <StackItem className="pf-v6-u-mb-md">
        <Title headingLevel="h2" size="lg">
          Scaling & Infrastructure
        </Title>
      </StackItem>

      <StackItem>
        <Card>
          <CardBody>
            <Stack hasGutter>
              <Split>
                <SplitItem className="pf-v6-u-mr-md">
                  <span className="day-one-welcome__icon-badge day-one-welcome__icon-badge--blue">
                    <Icon size="xl">
                      <NetworkWiredIcon />
                    </Icon>
                  </span>
                </SplitItem>
                <SplitItem isFilled>
                  <Stack hasGutter>
                    <StackItem>
                      <Title headingLevel="h3">
                        OpenShift Management Engine Cluster
                      </Title>
                    </StackItem>
                    <StackItem>
                      <Content component="p">
                        Offload your management engine and its add-ons to a
                        dedicated, high-performance cluster as your fleet grows.
                      </Content>
                    </StackItem>
                    <StackItem>
                      <Button variant="primary">
                        Setup a cluster for management
                      </Button>
                    </StackItem>
                  </Stack>
                </SplitItem>
              </Split>
            </Stack>
          </CardBody>
        </Card>
      </StackItem>

      <StackItem>
        <div>
          <Stack hasGutter>
            <StackItem>
              <Bullseye>
                <Button
                  variant="link"
                  icon={
                    <Icon isInline>
                      <ChevronDownIcon />
                    </Icon>
                  }
                  iconPosition="right"
                >
                  Select cluster type to create or import a cluster
                </Button>
              </Bullseye>
            </StackItem>
            <StackItem>
              <Divider />
            </StackItem>
            <StackItem>
              <Bullseye>
                <Content
                  component="small"
                  className="day-one-welcome__footer-note"
                >
                  Not ready to create add clusters?
                </Content>
              </Bullseye>
            </StackItem>
            <StackItem>
              <Bullseye>
                <Button variant="link">Skip and go to dashboard</Button>
              </Bullseye>
            </StackItem>
          </Stack>
        </div>
      </StackItem>
    </Stack>
  );
}
