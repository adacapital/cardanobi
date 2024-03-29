![This is an image](/web/web-app/public/img/cardanobi_logo_full_white.png#gh-dark-mode-only)
![This is an image](/web/web-app/public/img/cardanobi_logo_full_black.png#gh-light-mode-only)

# :warning: This repository has moved to a new location :warning:
# :ocean: Visist our new home: [CardanoBI](https://github.com/cardanobi/)
#
#
#
# CardanoBI :
The first fully open-source Business Intelligence API layer to provide on-chain analytics and enable new data-driven services on Cardano.

ADA Capital (ADACT) is joining forces with ZETETIC Stake Pool (ZETIC) to deliver value faster to the community.


# Problem statement :
There's a great deal of value locked in the data processed by Cardano and its ecosystem. How to extract it and make it available to all?

# Solution to the problem :
Build a Business Intelligence API Layer to provide on-chain analytics and enable new data-driven services on Cardano.

# Relevant experience :
SPOs running ADACT (https://adacapital.io) & ZETIC (https://zeteticstakepool.com), 40+ years exp full-stack dev/prod in FS industry, event-driven, API, AI.

Experienced in defining, architecting and delivering complex cross-domain IT projects, involving multiple technologies and remote teams.

Website/GitHub repository: https://github.com/adacapital/cardanobi

# Detailed description of the proposed solution :
This project proposes to build the following capabilities:

  * A fully open-source Business Intelligence API Layer on top of Cardano:
    * What does it do?
        * Provides developers with a standardized way to access and consume the data locked into the Cardano blockchain.
        * Enriches raw on-chain data with value added data analytics and insights to extract even more value out of Cardano's data.
  * A Software As A Service Business Intelligence API:
    * What does it do?
        * Commoditizes the access to Cardano's on-chain data and to new value added data analytics and insights.
        * Streamlines to all the access to the business value locked in Cardano's on chain data and enable the creation of new data-driven services thus supporting the growth of the Cardano ecosystem as a whole.
  * A series of reusable components:
    * What does it do?
        * Fully open-source backend CLI tools to define and leverage event-driven workflows.
        * Fully open-source frontend widgets to create new customer experiences and interactions.

# Description of how the proposed solution will address the challenge :
The above capabilities will bring the following benefits which will address the challenge:

  * A fully open-source Business Intelligence API Layer on top of Cardano:
    * Benefits:
        * By being fully open-source, we bring transparency and trust in how the service is delivered, demonstrating that the raw on-chain data isn't tempered with for instance.
        * By being fully open-source (across our whole stack: API infrastructure provisioning, API management, API definition and implementation), we allow others to fork our code and accelerate their own development thus reducing greatly their time to market. We accelerate overall the business value creation on Cardano and we make it accessible to all.
  * A Software As A Service Business Intelligence API:
    * Benefits:
        * For those who simply want to consume Cardano on-chain data and our value added data analytics, we offer even greater time to market compression by providing a readily consumable SaaS service. People will be able to pay for that service in ADA, EUR, GBP, USD or by delegating to one of our sponsor SPOs.
        * By creating new value added data insights, we target several customer segments (Investors, SPO, data aggregators, data analytics firms) and simplify their access to the Cardano on-chain data and insights. In doing so we enable new data-driven services inside and outside the Cardano ecosystem.
  * A series of reusable components:
    * Benefits:
        * CLI backend tools will enable developers to streamline the creation of new event-driven workflows: e.g. interact with their end-customers when a specific event occurred on the blockchain, or when a specific metric reaches a specific value, or when an epoch ends for instance.
        * Frontend widgets will enable developers to bring Cardano on-chain data and our value added data analytics to the end-customer screens and to improve their user experience or interact with the developed service in question.

# Main challenges or risks foreseen to deliver this project successfully :
Funding:

  * This project is a significant piece of work which requires the right level of funding to pay for infrastructure costs and senior IT resources to develop an industry standard solution.
  * To mitigate this risk we've prepared a detailed plan below with detailed and fair cost estimates.
  * We also planned for a 20% contingency budget.


Marketing:

  * To drive adoption to our open-source solution and SaaS service will require some time and effort towards marketing our brand, solutions and products.
  * This is less a risk but more of a point of attention that our founders are well aware of but can manage through our existing communication channels which are well established.

# Detailed plan :

## Context:

There's currently no fully open source API Layer on top of Cardano. Meaning your options are to build it yourself or look at fee-paying vendor solutions which are not open-source.

This is source of huge friction for those who want to create new data-driven value streams.

We want to remedy this by implementing a first class end-to-end API solution and open it to everyone.  You'll be able to consume our API infrastructure or run your own if you prefer as our whole stack will be open-source.

In addition to raw on-chain data API, we will also make available new business intelligence analytic-driven API to bring added value to SPOs, investors and businesses alike in order to enable new data-driven services on Cardano.

Specifically for small SPOs, for whom it is so difficult to differentiate themselves from larger pools, we want to provide the kind of data-driven insights that will allow them to better attract potential investors and to keep existing ones engaged.

Lastly, we will create reusable front-end & backend components, which by consuming our APIs, will offer service providers the ability to improve the user-experience of their customers or to create new customer journeys altogether.

## Plan :

There are 5 EPICS in this project:

1. API definition: in this phase we look at defining the API contracts and express them in the relevant standard (OpenAPI for REST API, AsyncAPI for STREAMING API)

2. API implementation: based on onion-architecture principles and micro-services

3. API management: from Identity, Authentication, Subscription and Monitoring all key components which allow managing the API lifecycle in a secure and industrialized fashion.

4. API Catalogue, Data-Insight visualization: https://cardanobi.io will be our portal for API subscription, API catalogue, API documentation as well as key data-insight dashboard for each of our pre-define customer profiles (SPO & Investors initially). 

5. Reusable components: these will be standalone frontend widgets or backend CLI, built on top of our APIs to enable new user experiences/interactions (e.g. components for SPOs to leverage important business events like a new block being forged, a new address delegating to their pool, a new ATH for the max number of ADA processed by their pool, etc...).

## Roadmap : 

All 5 EPICS will be broken down into features and are goal will be to optimize their sequencing such that we can deliver value incrementally and get client feedback quickly going through an MVP phase followed by an industrialization phase.

### EPIC #1: API definition

  * Feature 1: REST API following db-sync data model
    * Create swagger files.

  * Feature 2: New value added REST API
    * Create swagger files.

  * Feature 3: New value added ASYNC API
    * Create avro schemas.

### EPIC #2: API implementation

  * Feature 1: Infrastructure
    * Provisioning of necessary cloud based resources using Infrastructure As Code (IaC).
    * Leveraging load-balancing where necessary (db-sync, app servers)

  * Feature 2: db-sync
    * Install db-sync (https://github.com/input-output-hk/cardano-db-sync) in a load-balanced pattern.

  * Feature 3: Micro-services
    * Build services following Service Oriented Architecture (SOA) principles, services topology yet to be determined but certainly will follow entity domains as per db-sync data model enriched with new value added entities. 

  * Feature 4: Resilience + monitoring + NFRs
    * Implement resource monitoring through cloud service or adhoc solution (TBD)
    * Make sure above components are fault tolerant through load-balancing and can resume from failure.

  * Feature 5: API SDK
    * Nodejs SDK to commoditize the nodejs developer experience when using Cardanobi APIs.
    * Python SDK to commoditize the python developer experience when using Cardanobi APIs

### EPIC #3: API management

  * Feature 1: External API gateway
    * Leverage cloud provider external API gateway, configure policies (rate limit, quota).
    * Configuration, link to authentication server, setup Oauth2 and OIDC, API Keys to manage incoming traffic (north/south)
    * Configure other security aspects (pre-access checks, content attack prevention, abnormal activity)

  * Feature 2: Microgateways
    * Implement open source microgateways (nginx) to manage micro-services.
    * Manage traffic among microservices.

### EPIC #4: API catalogue, data-insight portal

  * Feature 1: Catalogue
    * Auto-generate API documentation from source code using relevant tool (eg. redoc)

  * Feature 2: Portal front-end
    * React native app consisting of landing page, API key generation page, API documentation pages, User subscription page (to access specific user profile data insights), data-insights page to present both key on-chain data analytics and new added-value data analytics (user will have to create an account to access profile specific data analytics (e.g. SPO, investors))

  * Feature 3: Portal back-end
    * Nodejs backend to fulfil certain interaction end-point and backend function (e.g. API key generation and safe keeping in dedicated vault)

### EPIC #5: Reusable components

  * Feature 1: Front-end components
    * React components + javascript code to retrieve relevant data points from APIs and present them in a modern widget.
    Scope to cover: epoch, slot, tip, time to epoch boundary, new block, transaction count, volume exchanged etc...

  * Feature 2: Back-end components for SPOs
    * CLI component allowing realtime pool data to be sent to Fron-end components.
    * CLI component allowing customer channel interaction (twitter, telegram) when business events are triggered (new block, new delegator etc...)

## Timeline / Success criteria :

Here we provide estimated completion time horizons of each feature identified with E(epic number)F(feature number) (e.g. E1F1 for FEATURE #1 of EPIC #1)

### 1 month:
  * E1F1, E2F1, E2F2
  * Outcome: the core infra is set up and core REST APIs are defined

### 3 months:
  * E2F3, E3F1, E3F2
  * Outcome: microservices framework and first instances deployed, external gateway and microgateway in place. (this can be considered a first MVP where the API consumption can be tested end to end).

### 6 months:
  * E1F3, E2F4, E4F1, E4F2, E4F3, E5F1, E5F2
  * Outcome: new value added API have been defined, the services are resilient and follow relevant non-function requirements (NFRs), monitoring is in place, the portal is in place with its API catalogue. (this can be considered as the industrialized MVP enriched with the customer front-end)

### 12 months:
  * Outcome: we've done the necessary social media marketing, IOG is helping as they see the great product that has been built, we have 10,000+ API queries a day.
 

Expected start date: May 2022

Expected public launch date: November 2022
