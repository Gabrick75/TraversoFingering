import FluteChartTable from '../components/FluteChartTable';
import { piccoloData } from '../data/piccoloData';

export default function PiccoloChart() {
  return (
    <>
      <p className="chart-source-note">Sounds an octave higher than written.</p>
      <FluteChartTable data={piccoloData} diagram instrument="piccolo" />
    </>
  );
}
