import React from "react";
import {
    Value as REValue,
    App as REApp,
    People,
    Value,
    Output,
    If,
} from "reactive_essays";
import "reactive_essays/styles/styles.css";

const WORLD_POPULATION = 7_910_000_000;
const HUNGRY_PEOPLE = 881_000_000;

const getGMOInfo = (data: any) => {
    return Number(
        (
            7.19 +
            (Math.round(data.gmointegration as number) / 100) *
                7.19 *
                (1 + Math.round(data.cropgrowincrease as number) / 100)
        ).toPrecision(4)
    );
};

function Section(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            style={{
                padding: "10px",
                width: "50%",
                float: "left",
                border: "2px black solid",
                borderRadius: "10px",
                marginTop: "7px",
                marginBottom: "5px",
                marginRight: "10px",
            }}
        >
            {props.children}
        </section>
    );
}

function App() {
    return (
        <REApp
            style={{
                padding: "100px",
            }}
        >
            <header>
                <h1 style={{ marginBottom: "5px", fontSize: "25pt" }}>
                    GMOs - The Solution to the Growing Food Crisis
                </h1>
                <p style={{ fontSize: "17px" }}>
                    <em>By Anvay Mathur</em>
                </p>
            </header>
            <hr />
            <article
                style={{
                    fontSize: "14pt",
                    lineHeight: "1.5",
                }}
            >
                <div>
                    What I’m going to say next is the truth. 100% the truth.
                    GMOs—genetically modified organisms—are the most useful and
                    versatile technology ever created. They are the only viable
                    solution to increase our crop yield and feed the growing
                    population. However, according to the Pew Research Center,
                    57% of all Americans believe GMOs are bad for them.
                    <figure
                        style={{
                            float: "right",
                            margin: "7px",
                            display: "table",
                        }}
                    >
                        <People
                            rows={10}
                            columns={10}
                            people={100}
                            percentage={57}
                            hasIcon={true}
                        />
                        <figcaption
                            style={{
                                fontSize: "13px",
                                width: "100%",
                                display: "table-caption",
                                captionSide: "bottom",
                                marginTop: "5px",
                            }}
                        >
                            <em>
                                There are the 57%. Think about it. Probably more
                                than half of the people you know have this
                                opinion.
                            </em>
                        </figcaption>
                    </figure>{" "}
                    They’re wrong. Utilizing genetic modifications to their full
                    potential will help us better feed our growing population,
                    nourish people even more than conventional foods, and
                    protect our environment which is being destroyed while we
                    speak. And today, I’m going to explain why more than 115
                    million Americans are, in fact, wrong.
                </div>{" "}
                <br />
                <div>
                    But why am I here in the first place? It’s because of
                    consumers. The world is riddled with misinformation about
                    GMOs, causing boycotts of GMO foods, legislation which
                    causes further fear, and{" "}
                    <a
                        href="https://edition.cnn.com/2014/03/25/health/upwave-gmo-free-diet/index.html"
                        title="An example of this."
                    >
                        biased media sources
                    </a>
                    . People are so caught up in the fear of GMOs that they
                    don’t look at the truth. It’s the vicious cycle of fear,
                    when someone is scared, which causes another person to be
                    scared, which causes the first person to, and so on, which
                    has become a huge problem in trying to solve the issue of
                    malnutrition. According to a survey conducted by a pro-GMO
                    group, seven out of ten consumers are positive that they
                    have no idea what in the world GMOs even are. This problem
                    needs to be solved. Here is why:
                </div>
                <br />
                <div>
                    Firstly, using GMOs can increase our food supply. In
                    experiments run by the University of Illinois, genetically
                    modifying tobacco plants to run photosynthesis more
                    efficiently caused them to grow up to 40% larger than a
                    normal tobacco plant. According to the UN, 700 million
                    people are hungry and by 2050 that number will be increased
                    by 2 billion people. A 40% increase in food production can
                    easily cut that number down.
                    <Section>
                        By 2050, the UN estimates that our population will be{" "}
                        <b>9.8 billion</b>, and by 2100 it might be{" "}
                        <b>11.2 billion</b>. With genetic modifications to help
                        plants better survive climate change, we can genetically
                        modify photosynthesis to make them grow faster. If we
                        are able to make crops grow{" "}
                        <Value
                            id="cropgrowincrease"
                            value={20}
                            minValue={10}
                            maxValue={80}
                            getOutputText={(v) => `${v}%`}
                            scalingRate={0.1}
                        />{" "}
                        faster, and{" "}
                        <Value
                            id="gmointegration"
                            value={20}
                            minValue={0}
                            maxValue={100}
                            getOutputText={(v) => `${v}%`}
                            scalingRate={0.2}
                        />{" "}
                        of all crops being produced are GMOs, around{" "}
                        <Output
                            refs={["cropgrowincrease", "gmointegration"]}
                            unit="billion metric ton"
                            getValue={getGMOInfo}
                        />{" "}
                        of food will be produced per year.{" "}
                        <If
                            refs={["cropgrowincrease", "gmointegration"]}
                            statement={(data) => {
                                let o = getGMOInfo(data);
                                return o !== 7.19;
                            }}
                        >
                            Currently, we produce about 7.19 billion metric tons
                            a year. This is a{" "}
                            <Output
                                refs={["cropgrowincrease", "gmointegration"]}
                                getOutputText={(v) =>
                                    `${+(v as number).toPrecision(3)}%`
                                }
                                getValue={(data) => {
                                    let o = getGMOInfo(data);
                                    return (o / 7.19) * 100 - 100;
                                }}
                            />{" "}
                            increase in food production. This equates to{" "}
                            <Output
                                refs={["cropgrowincrease", "gmointegration"]}
                                getValue={(data) => {
                                    const increase =
                                        Math.round(
                                            data.cropgrowincrease as number
                                        ) / 100;
                                    const integration =
                                        Math.round(
                                            data.gmointegration as number
                                        ) / 100;
                                    return (
                                        Math.round(
                                            (HUNGRY_PEOPLE -
                                                HUNGRY_PEOPLE /
                                                    (1 +
                                                        (1 + increase) *
                                                            integration)) /
                                                100000
                                        ) / 10
                                    );
                                }}
                                getActualUnit={() =>
                                    "million less hungry people"
                                }
                            />
                            . Either way you chose your numbers—that’s a lot. We
                            could save a lot of lives with this strategy.
                        </If>
                    </Section>
                    Also, now that it’s genetically modified, the plants can be
                    more resistant to more severe weather as the UN states that
                    a big reason for increased starvation is climate change.
                    According to Amanda Cavanagh, a postdoctoral researcher at
                    the University of Illinois, “By 2050, we’re pretty certain
                    that we have to increase crop yields by anywhere from 25 to
                    70 percent to feed all the hungry people in the world. We
                    don’t have another obvious way to increase yield other than
                    taking a genetic engineering approach.” Because the
                    experiment showed a 40% increase in size in early stages,
                    this means that it could be a feasible solution provided
                    that it’s within the 25 to 70% range. Having a higher yield
                    from each plant would increase the total food in the world.
                    Having more food would decrease deaths from malnutrition,
                    and therefore, increase GMO popularity. This would increase
                    GMOs used and repeat the cycle. All we need to do is give
                    this reinforcing causal loop a push. Therefore, GMOs can
                    increase our food supply.
                </div>
                <p>
                    Another reason that GMOs are useful is that they are
                    actually good for the environment. According to GMO Answers,
                    GMOs are easier to farm and require less input: “A major
                    advantage for over 18 million farmers globally who plant
                    GMOs is the ability to successfully grow crops with fewer
                    inputs, including reduced pesticide applications and the
                    fuel needed to operate tractors to till the soil.” This
                    means that farming GMOs is more efficient and easier for
                    poor farmers to farm. It’s lower maintenance, and it
                    pollutes less and the food will be more natural because
                    there would be less pesticides in them than normal “organic”
                    foods. Funnily enough, this means that GMOs are actually
                    better for the environment, humans, and animals than normal
                    “organic” produce. According to the scientific paper GM
                    Crops: Global Socio-Economic and Environmental Impacts
                    1996-2014, GMOs helped reduce the amount of land used by
                    farming in 2014 by 20.7 million hectares (51.2 million
                    acres). This means that we can reduce the amount of
                    deforestation by using GMOs, which is good for the
                    environment because we can plant our crops and also save
                    habitats that are being destroyed. This would be useful for
                    palm plantations because they can use less area from natural
                    habitats. Also, land costs money and that would mean being a
                    farmer would be cheaper as they don’t have to buy as much
                    land. Having more efficient land usage can affect
                    deforestation and the stakeholder of farmers provided that
                    they will be more interested in GMOs since they can get the
                    food cheaper. This leads to more GMO crops being produced.
                    Just from being more land efficient, a ripple effect that
                    ensues is fewer deaths because of increased crop production.
                    Because of this evidence, GMOs can be good for the
                    environment.
                </p>
                <p>
                    Finally, GMOs can be more nutritious than conventional
                    foods. According to the Alliance for Science article
                    “Unfairly demonized GMO crops can help fight malnutrition”,
                    “ [...] breeding strategies with genetic engineering can be
                    redirected towards the accumulation of a non-existent target
                    nutrient in a desired tissue [...] The first genetically
                    modified (GM) crop that produced beta-carotene [precursor to
                    Vitamin A] was rice, an important cereal that doesn’t have
                    this nutrient in its grain.” This means that we can use
                    genetic modifications to make our food healthier. To the
                    57%—how does this make GMOs bad for us? With these
                    modifications and modifying photosynthesis, we can decrease
                    malnutrition, as we have more crops with more efficient
                    delivery of nutrition. The same articles state that “There
                    are also GM crops where several nutrients have been
                    increased...achieving 169 times more beta-carotene, six
                    times more vitamin C and twice as much folate.” One hundred
                    sixty-nine times is quite a lot. Practically everyone likes
                    rice, but some people don’t like the taste of leafy
                    vegetables and liver oil. Since increased nutrition doesn’t
                    affect taste, using golden rice could help those who do not
                    like the taste of leafy vegetables. Facilitating people’s
                    enjoyment of nutritious foods can lead to less malnutrition;
                    people will get more nutrition, fewer people will die, and
                    this will lead to a higher popularity of GMOs, causing more
                    GMOs to be planted, repeating the cycle. Using all of this,
                    we can come to the conclusion that GMOs can, in fact, be
                    more nutritious than normal food, contrary to popular
                    belief.
                </p>
                <p>
                    However, someone might argue that having GMOs shifts power
                    to companies and away from small farmers. This is a valid
                    argument, but isn’t totally true. According to the previous
                    Alliance for Science article, many GMOs are actually royalty
                    free, “...and like golden rice, the [golden banana] will be
                    released without royalties so that it can be cultivated
                    freely by African farmers.” Farmers in Africa would probably
                    rather use cheaper royalty-free GMOs rather than expensive
                    royalty-expensive GMOs. This would propagate in the system
                    since cheaper-to-buy GMOs would drive prices down from
                    conventional foods and GMOs with royalties would not be able
                    to survive as they would be more expensive. This would lead
                    to most GMOs becoming royalty free because GMO companies
                    wouldn’t survive if no one wanted to buy their products.
                    Therefore, it’s clear that GMOs won’t really give power to
                    companies.
                </p>
                <p>
                    Now that you are (hopefully) convinced, how can you help?
                    It’s pretty easy. Stop boycotting GMOs yourself and actually
                    buy GM foods. It will speed up the process of GMO
                    integration into the food industry. Have any misinformed
                    friends? Talk to them, and explain to them why. And last but
                    not least, the most important one: spread the word by being
                    a proponent of GMOs and taking civic action. We have to be
                    able to feed a growing population, which includes a growing
                    starving population. Also, these anti-GMO groups aren’t as
                    “grassroots” as you think. You may say that pro-GMO groups
                    are funded by GMO companies. Well, anti-GMO groups are
                    actually funded by organic food companies. See the conflict
                    of interest? The only people supporting the anti-GMO
                    movement are organic foods companies, and the people
                    supporting the pro-GMO movement are both GMO companies and
                    scientists. We’ve been fooled, tricked into believing that
                    GMOs are bad for us. Without GMOs on society’s side, we’re
                    doomed.{" "}
                </p>
                <p>
                    First, using GMOs can increase our food supply, second, GMOs
                    are better for the environment than normal foods, and
                    finally, GMOs can be more nutritious than conventional
                    foods. Also, GMOs won’t give power to big companies. Just
                    like Thanos, GMOs are inevitable. They’re cheap and
                    efficient. Why would farmers not like that? It’s a win-win
                    for everyone. Farmers buy seeds for cheaper, farmers spend
                    less of their money and time on the growing plants, and you
                    spend less money on the plants, you can eat less of them for
                    more nutrition, and you can keep them in storage for longer.
                    Using all the previous statements backed up with evidence,
                    we can conclude that using genetic modifications on plants
                    to their full potential can clearly have a positive effect
                    on our society and our environment.
                </p>
                <hr />
                <h2>Works Cited</h2>
                <p>
                    <a href="https://www.pewresearch.org/fact-tank/2020/03/18/about-half-of-u-s-adults-are-wary-of-health-effects-of-genetically-modified-foods-but-many-also-see-advantages/">
                        About half of U.S. adults are wary of health effects of
                        genetically modified foods, but many also see advantages
                    </a>{" "}
                    - Pew Research Center 18/3/20
                    <br />
                    <a href="https://www.nbcnews.com/mach/science/plant-scientists-have-found-way-hack-photosynthesis-here-s-why-ncna956706">
                        Plant scientists have found a way to 'hack'
                        photosynthesis. Here's why that's a big deal.
                    </a>{" "}
                    - NBC News (University of Illinois) 10/6/19
                    <br />
                    <a href="https://gmoanswers.com/gmos-environment">
                        How do GMOs Affect the Environment? | Benefits of GMO
                    </a>{" "}
                    - GMOAnswers.com
                    <br />
                    <a href="https://www.pgeconomics.co.uk/pdf/2016globalimpactstudymay2016.pdf">
                        GM Crops: Global Socio-Economic and Environmental
                        Impacts 1996-2014
                    </a>{" "}
                    - Graham Brookes &amp; Peter Barfoot March ‘18
                    <br />
                    <a href="https://allianceforscience.cornell.edu/blog/2018/06/unfairly-demonized-gmo-crops-can-help-fight-malnutrition/">
                        Unfairly demonized GMO crops can help fight malnutrition
                    </a>{" "}
                    - Daniel Norero 20/6/18
                </p>
            </article>
        </REApp>
    );
}

export default App;
