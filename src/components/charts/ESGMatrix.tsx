import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { motion } from "framer-motion";
import { ESGFactorType } from "../../types";


const categoryColors: { [key: string]: string } = {
  首要的正面衝擊主題: "#353b63",
  次要的正面衝擊主題: "#6e329c",
  持續追蹤的正面衝擊主題: "#fa862d",
};

const ESGMatrix = ({ data }: { data: ESGFactorType[] }) => {
  const chartData = data.map((factor) => ({
    id: factor.categoryPositive,
    data: [
      {
        x: factor.possibilityPositive,
        y: factor.impactPositive,
        name: factor.name,
        category: factor.categoryPositive,
      },
    ],
  }));

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveScatterPlot
        data={chartData}
        colors={Object.values(categoryColors)}
        margin={{ top: 40, right: 40, bottom: 70, left: 90 }}
        xScale={{ type: "linear", min: 0, max: 10 }}
        yScale={{ type: "linear", min: 0, max: 10 }}
        axisBottom={{
          legend: "衝擊顯著度",
          legendPosition: "middle",
          legendOffset: 46,
          tickValues: [],
        }}
        axisLeft={{
          legend: "發生可能性",
          legendPosition: "middle",
          legendOffset: -60,
          tickValues: [],
        }}
        nodeSize={16}
        tooltip={({ node }) => (
          <div
            className="border-[1px] content overflow-hidden rounded-xl"
            style={{ borderColor: categoryColors[node.data.category] }}
          >
            <p
              className="text-white px-4 py-2"
              style={{ backgroundColor: categoryColors[node.data.category] }}
            >
              {node.data.category}
            </p>
            <p className="px-4 py-2  bg-white/20 backdrop-blur">
              {node.data.name}
            </p>
          </div>
        )}
      />
    </div>
  );
};

const ESGMatrixDetail = ({ data }: { data: ESGFactorType[] }) => {
  const groupedData = data.reduce((acc, factor) => {
    if (!acc[factor.categoryPositive]) {
      acc[factor.categoryPositive] = [];
    }
    acc[factor.categoryPositive].push(factor);
    return acc;
  }, {} as { [key: string]: ESGFactorType[] });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="grid grid-cols-1 gap-2">
      <ESGMatrix data={data} />
      <div className="mt-[40px] space-y-4">
        {Object.keys(groupedData).map((category, index) => (
          <motion.div
            key={category}
            className="rounded-tr-[20px] border-[1px] overflow-hidden"
            style={{ borderColor: categoryColors[category] }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={itemVariants}
          >
            <p
              className="mb-2 px-4 py-2 text-white"
              style={{ backgroundColor: categoryColors[category] }}
            >
              {category}
            </p>
            <div className="grid grid-cols-2 px-4 pb-4 pt-2 text-xs font-light">
              {groupedData[category].map((factor) => (
                <p key={factor.name} className="py-1">
                  {factor.name}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default ESGMatrixDetail;
