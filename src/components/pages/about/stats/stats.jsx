import Image from 'next/image';
import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import arrowUpRightIcon from 'images/pages/about/stats/arrow-up-right.svg';
import databaseIcon from 'images/pages/about/stats/database.svg';
import gearIcon from 'images/pages/about/stats/gear.svg';

const STATS_DATA = [
  {
    icon: databaseIcon,
    value: '40,000+',
    description: 'Databases provisioned daily by developers worldwide.',
    iconGap: 'gap-[25px]',
  },
  {
    icon: gearIcon,
    value: '80%',
    description: 'Of databases are deployed by automated agents.',
    iconGap: 'gap-5',
  },
];

const SectionLabel = ({ text }) => (
  <div className="flex items-end gap-2">
    <Image
      src={arrowUpRightIcon}
      alt=""
      width={12}
      height={14}
      aria-hidden="true"
      className="text-gray-new-20"
    />
    <span className="font-mono text-xs font-medium uppercase leading-none text-gray-new-20">
      {text}
    </span>
  </div>
);

SectionLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

const StatCard = ({ icon, value, description, iconGap }) => (
  <div
    className={`flex w-[212px] flex-col xl:w-[180px] lg:w-[160px] md:w-full ${iconGap} xl:gap-4 lg:gap-3`}
  >
    <Image
      src={icon}
      alt=""
      width={32}
      height={32}
      aria-hidden="true"
      className="h-8 w-8 lg:h-7 lg:w-7 md:h-6 md:w-6"
    />
    <div className="flex flex-col gap-1.5">
      <span className="text-[38px] font-normal leading-dense tracking-tighter text-black-pure xl:text-[32px] lg:text-[28px] md:text-2xl">
        {value}
      </span>
      <p className="text-base font-normal leading-normal tracking-extra-tight text-gray-new-40 lg:text-sm">
        {description}
      </p>
    </div>
  </div>
);

StatCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconGap: PropTypes.string.isRequired,
};

const VisionStatement = ({ children, highlights = [] }) => (
  <div className="relative w-[416px] xl:w-[360px] lg:w-full">
    {/* Green highlight rectangles positioned behind text */}
    {highlights.map((highlight, index) => (
      <div
        key={index}
        className="absolute rounded-sm bg-[#39A57D]/60"
        style={{
          left: highlight.left,
          top: highlight.top,
          width: highlight.width,
          height: highlight.height,
        }}
        aria-hidden="true"
      />
    ))}
    <p className="relative text-xl font-medium leading-normal tracking-tighter text-black-pure xl:text-lg lg:text-base">
      {children}
    </p>
  </div>
);

VisionStatement.propTypes = {
  children: PropTypes.node.isRequired,
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      left: PropTypes.string.isRequired,
      top: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
    })
  ),
};

const Stats = () => (
  <section className="stats safe-paddings bg-[#E4F1EB] py-40 xl:py-32 lg:py-24 md:py-20 sm:py-16">
    <h2 className="sr-only">Company Statistics and Vision</h2>
    <Container size={1344} className="xl:!max-w-[1100px]">
      <div className="flex gap-x-[108px] xl:gap-x-16 lg:flex-col lg:gap-y-16 md:gap-y-12">
        {/* Left Column - Main heading and stats */}
        <div className="relative flex-1 border-l border-gray-new-50 pl-[19px] lg:order-1 lg:pl-5">
          <SectionLabel text="Where we're headed" />

          <h3 className="mt-[34px] max-w-[736px] text-5xl font-normal leading-dense tracking-tighter xl:mt-7 xl:max-w-[600px] xl:text-[40px] lg:mt-6 lg:max-w-full lg:text-4xl md:mt-5 md:text-[32px] sm:text-[28px]">
            <span className="text-black-pure">Neon is a Databricks company.</span>{' '}
            <span className="text-gray-new-40">
              In May 2025, Neon joined Databricks to shape the future of Postgres and AI-native
              development.
            </span>
          </h3>

          <div className="mt-[194px] flex gap-x-[84px] xl:mt-[140px] xl:gap-x-12 lg:mt-[100px] lg:gap-x-8 md:mt-16 md:flex-col md:gap-y-10">
            {STATS_DATA.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Right Column - Vision statements */}
        <div className="lg:order-0 relative w-[436px] border-l border-gray-new-50 pl-5 xl:w-[380px] lg:w-full">
          <div className="pt-[3px]">
            <SectionLabel text="Our Vision" />
          </div>

          <div className="mt-[340px] xl:mt-[260px] lg:mt-[200px] md:mt-32 sm:mt-24">
            <VisionStatement
              highlights={[{ left: '248px', top: '2px', width: '148px', height: '28px' }]}
            >
              The mission stays the same: deliver Postgres for developers and AI agents — now backed
              by the scale and expertise of Databricks.
            </VisionStatement>

            <div className="mt-10 xl:mt-8 lg:mt-6">
              <VisionStatement
                highlights={[
                  { left: '84px', top: '62px', width: '316px', height: '28px' },
                  { left: '0px', top: '92px', width: '119px', height: '28px' },
                ]}
              >
                The same technology behind Neon powers Lakebase: The&nbsp;first serverless Postgres
                database integrated with the lakehouse, built for the AI era.
              </VisionStatement>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Stats;
