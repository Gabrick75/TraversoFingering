import FluteChartTable from '../components/FluteChartTable';
import { transverseFluteData } from '../data/transverseFluteData';

export default function TransverseFluteChart() {
  return <FluteChartTable data={transverseFluteData} diagram instrument="flute" />;
}
