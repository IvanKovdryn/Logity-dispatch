const menu = document.querySelector(".menu-bg");
const nav = document.querySelector(".nav");
const footerDesc = document.querySelector(".footer-top");

if (menu) {
  menu.addEventListener("click", function (e) {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("lock");
  });
}
window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    menu.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("lock");
  }
});

if (footerDesc) {
  footerDesc.insertAdjacentHTML(
    "beforeend",
    `
  <div class="footer-desc">
  <h3>Definitive Service from Your Dispatch Services</h3>
  <br />
  <p>
    Not many people have the drive it takes to start a trucking or
    transport business and maintain it through the good times and bad.
    This sector can seem like a thankless place, where regulations and
    industry rules require endless paperwork and you are left to negotiate
    load rates with shippers and other clients. Sometimes, the necessary
    administrative tasks seem only to keep you away from the activity at
    the heart of your business: transporting cargo and freight to wherever
    it needs to be, safely and on time. Sure, there are dispatch services
    for owner operators. But many logistic trucking businesses are wary
    about what strings may be attached, based on negative past experiences
    and word of mouth. Enter Logity Dispatch. We came into the fray in
    2015 with one purpose: to provide a dispatch service that puts more
    money in clients' pockets and helps grow their businesses. If there's
    anything missing, it's the lip service some dispatch services are
    content to give.
  </p>
  <br />
  <h3>Not Just Another Dispatch Company</h3>
  <br />
  <p>
    The trucking dispatch service we offer is comprehensive and backed by
    years of industry experience and expertise. We don't just see
    ourselves as a truck dispatching company, but as dispatch customer
    service. This means that our number one priority is to provide the
    best client care. Our role as truck support is one we take very
    seriously. When we search for loads, we use all the resources
    available to us – which, in many cases, include search platforms not
    available to just anyone – and we fiercely negotiate for the highest
    prices per load. We go that extra mile because our clients work hard
    and we want them to see more profit with the loads we find.
  </p>
  <br />
  <h3>An Honest, Reliable Service</h3>
  <br />
  <p>
    When dispatch companies compete with one another, they often promise
    prospective clients out-of-this-world sorts of things, and their
    clients end up with unrealistic expectations. Then, when they can't
    deliver, their clients suffer. At Logity Dispatch, we treat our
    clients the way we expect to be treated: with respect, integrity, and
    honesty. We don't see a need for sugarcoating. We know our clients are
    able business people who need accurate information to make smart,
    informed decisions. Our clients are less interested in artificially
    feeling better and more focused on their businesses doing better. We
    are here to help you move ahead, not to hold your hand.
  </p>
  <br />
  <h3>Services with the Freedom to Choose</h3>
  <br />
  <p>
    One of the fears many clients have relayed to us is the fear of being
    bound to their freight dispatch service and not being able to refuse
    loads that aren't right for them. At Logity, we give clients the
    autonomy – they never have to worry about being stuck with a load they
    don't want. We are never going to force anyone to take any particular
    load, period. After all, our clients are not here to serve us; we are
    here to serve them. It's part of our proud commitment and serious
    dedication to putting our clients and the well-being of their
    businesses first.
  </p>
  <br />
  <h3>Putting the 'Service' in Dispatch Service</h3>
  <br />
  <p>
    Logity Dispatch provides clients with the most comprehensive dispatch
    support services. We negotiate load rates, complete all necessary
    paperwork, help maintain DoT and safety compliance, contact and liaise
    with shippers, and much more. We also know that some businesses need
    more support than others, and we are happy to assist at whatever stage
    your business is. That's why you can take advantage of all our
    different services or pick and choose what you need. Some clients just
    want our high-quality documentation service. Others put everything but
    the driving in our capable hands. Whether you are looking for an
    all-inclusive auto transport dispatch service or want a car hauling
    dispatch service more catered towards your individual preferences, we
    are here to make it work.
  </p>
  <br />
  <h3>A Company More Cost-Effective than In-House</h3>
  <br />
  <p>
    Many trucking and transport companies want to hire in-house
    dispatchers under the assumption that this will be more cost-effective
    than hiring an outside dispatch service. In many cases, however, it is
    actually better for the bottom line to partner up with an experienced
    truck dispatching company. For one, you wouldn't have to shell out for
    a venue for your dispatchers – and, nowadays, office rentals are
    expensive. Clients have actually found that going with a trusted
    dispatch service is even more cost-effective than hiring a single
    in-house full-time dispatcher! Secondly, in order to find in-house
    dispatchers with the proficiency and acuity we offer at Logity
    Dispatch, you would have to run a serious talent recruitment campaign
    to find qualified and competent personnel. This means expending time
    and resources – things you should be dedicating to your core
    operations.
  </p>
  <br />
  <h3>Industry Advantage in Your Customer Service</h3>
  <br />
  <p>
    It is time for your business to thrive. Resolve to streamline the way
    you run your operations. Don't work harder – work smarter. Work
    better. That is the key to growing your business. As for Logity
    Dispatch, we are here to deal with the distractions – paperwork,
    negotiations, compliance, communications, logistics, and more – that
    keep you from doing what you do best: driving and delivering safely
    and on time. Imagine having the freedom to focus on what you want to
    and not being bogged down by the administrative and tedious
    requirements expected in this industry – and not being bound to loads
    if you do not feel that they are right for you. Providing our clients
    the service they need – and not forcing anyone to use services they
    don't feel they need – is what we have been doing since our inception
    in 2015. Want to find out more about our streamlined processes and
    high level of professionalism and customer care? Contact us with your
    questions or tell us about your operations and where you want your
    business to be. We would be delighted to show you how Logity can help
    you meet your business goals and keep more of your hard-earned money.
  </p>
</div>`
  );
}
