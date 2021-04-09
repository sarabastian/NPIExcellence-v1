import Target from '../svg/target.svg';
import VoC from '../svg/voc.svg';
import Lean from '../svg/mvp.svg';
import Tool from '../svg/tool.svg';
import Multi from '../svg/multi.svg';
import Portfolio from '../svg/portfolio.svg';
import Competitive from '../svg/competitive.svg';
import Expansion from '../svg/expansion.svg';
import Skill from '../svg/skill.svg';

export default [
  {
    title: 'NPI Maturity Model Assessment ',
    content:
      'A 19 point assessment model to understand your current baseline and identify improvement areas',

    customerImage: <Competitive />
  },
  {
    title: 'Portfolio Management Tools',
    content:
      'Tools to manage the portfolio of new products to insure the right mix of risk/reward and ability to execute',

    customerImage: <Portfolio />
  },
  {
    title: 'Multi-Generational Product Planning',
    content:
      'Processes and tools to drive a strategic and market led approach to new product development that aligns to your business strategy. Life-cycle management of your products',
    customerImage: <Multi />
  },
  {
    title: 'Voice of Customer',
    content:
      'Proven methods to insure new product success with customer involvement from point of inception to post launch. Kano modeling for product feature prioritization',
    customerImage: <VoC />
  },
  {
    title: 'SKU Rationalization',
    content:
      'New Product Introductions are exciting and rewarding. What about the existing products? Does the new product cannibalize the existing product? Integrate SKU rationalization into the NPI process',
    customerImage: <Tool />
  },
  {
    title: 'Competitive Analysis',
    content: 'Tear down models, reverse engineering, IP reviews',
    customerImage: <Target />
  },
  {
    title: 'Lean Techniques',
    content: 'MVP for speed to market',
    customerImage: <Lean />
  },
  {
    title: 'Product Management Organizational Ladder/Skill acquisition',
    content: 'Map program management complexity with skills needed to ensure success',
    customerImage: <Skill />
  },
  {
    title: 'M&A Portfolio Expansion',
    content:
      'Specific merger and acquisition strategies to close product portfolio gaps with “Lean M&A” concepts',
    customerImage: <Expansion />
  }
];
