import Maturity from '../svg/maturitymodel.svg';
import Customer from '../svg/reviews.svg';
import LeanTechnique from '../svg/leantechnique.svg';
import Portfolio from '../svg/portfoliotool.svg';
import SKU from '../svg/segmentation.svg';
import Step from '../svg/stepping.svg';
import Generational from '../svg/generational.svg';
import Competitive from '../svg/competition.svg';
import Statistic from '../svg/statistic.svg';

export default [
  {
    title: 'NPI Maturity Model Assessment ',
    content:
      'A 19 point assessment model to understand your current baseline and identify improvement areas',

    customerImage: <Maturity />,
  },
  {
    title: 'Portfolio Management Tools',
    content:
      'Tools to manage the portfolio of new products to insure the right mix of risk/reward and ability to execute',

    customerImage: <Statistic />,
  },
  {
    title: 'Multi-Generational Product Planning',
    content:
      'Processes and tools to drive a strategic and market led approach to new product development that aligns to your business strategy. Life-cycle management of your products',
    customerImage: <Generational />,
  },
  {
    title: 'Voice of Customer',
    content:
      'Proven methods to insure new product success with customer involvement from point of inception to post launch. Kano modeling for product feature prioritization',
    customerImage: <Customer />,
  },
  {
    title: 'SKU Rationalization',
    content:
      'New Product Introductions are exciting and rewarding. What about the existing products? Does the new product cannibalize the existing product? Integrate SKU rationalization into the NPI process',
    customerImage: <SKU />,
  },
  {
    title: 'Competitive Analysis',
    content: 'Tear down models, reverse engineering, IP reviews',
    customerImage: <Competitive />,
  },
  {
    title: 'Lean Techniques',
    content: 'MVP for speed to market',
    customerImage: <LeanTechnique />,
  },
  {
    title: 'Product Management Organizational Ladder & Skill Acquisition',
    content: 'Map program management complexity with skills needed to ensure success',
    customerImage: <Step />,
  },
  {
    title: 'M&A Portfolio Expansion',
    content:
      'Specific merger and acquisition strategies to close product portfolio gaps with “Lean M&A” concepts',
    customerImage: <Portfolio />,
  },
];
