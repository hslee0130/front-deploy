import React from 'react';
import { Table, Select, Button, Input } from 'antd';
const { Option } = Select;

const MonthlyReport: React.FC = () => {
  const columns = [
    { title: '날짜', dataIndex: 'date', key: 'date' },
    { title: '요일', dataIndex: 'day', key: 'day' },
    { title: '현금', dataIndex: 'cash', key: 'cash' },
    { title: '카드', dataIndex: 'card', key: 'card' },
    { title: '계', dataIndex: 'total', key: 'total' },
    { title: '매출계', dataIndex: 'salesTotal', key: 'salesTotal' },
    { title: '계약금', dataIndex: 'deposit', key: 'deposit' },
    { title: '매입계', dataIndex: 'purchase', key: 'purchase' },
    { title: '매입누계', dataIndex: 'purchaseAccum', key: 'purchaseAccum' },
    { title: '현금누계', dataIndex: 'cashAccum', key: 'cashAccum' },
    { title: '비고', dataIndex: 'note', key: 'note' },
  ];

  const data = [
    { key: '1', date: '10일', day: '금', cash: 1000, card: 1000, total: 2000, salesTotal: 2000, deposit: 2000, purchase: 2000, purchaseAccum: 2000, cashAccum: 2000, note: '' },
    { key: '2', date: '11일', day: '토', cash: '', card: '', total: '', salesTotal: '', deposit: '', purchase: '', purchaseAccum: '', cashAccum: '', note: '' },
    { key: '3', date: '12일', day: '일', cash: '', card: '', total: '', salesTotal: '', deposit: '', purchase: '', purchaseAccum: '', cashAccum: '', note: '' },
  ];

  const summaryColumns = [
    { title: '평일 일매출', dataIndex: 'weekdaySales', key: 'weekdaySales' },
    { title: '예상 일간 매출', dataIndex: 'expectedSales', key: 'expectedSales' },
    { title: '고정비', dataIndex: 'fixedCost', key: 'fixedCost' },
    { title: '매일 지출', dataIndex: 'dailyExpense', key: 'dailyExpense' },
    { title: '잔업비', dataIndex: 'overtime', key: 'overtime' },
    { title: '순수익', dataIndex: 'profit', key: 'profit' },
  ];

  const summaryData = [
    { key: '1', weekdaySales: '', expectedSales: '', fixedCost: '', dailyExpense: '', overtime: '', profit: '' },
  ];

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2>월별 매출</h2>
        <div>
          <Select defaultValue="2024.04" style={{ width: 120, marginRight: 8 }}>
            <Option value="2024.04">2024.04</Option>
          </Select>
          <Select defaultValue="서울" style={{ width: 120, marginRight: 8 }}>
            <Option value="서울">서울</Option>
          </Select>
          <Select defaultValue="Excel" style={{ width: 120 }}>
            <Option value="Excel">Excel</Option>
          </Select>
          <Button type="primary" style={{ marginLeft: 8 }}>확인</Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        summary={() => (
          <Table.Summary>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={11}>Monthly Summary</Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>정산주</Table.Summary.Cell>
              <Table.Summary.Cell index={1} colSpan={5}>평일 일매출</Table.Summary.Cell>
              <Table.Summary.Cell index={6} colSpan={5}>예상 일간 매출</Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>월</Table.Summary.Cell>
              <Table.Summary.Cell index={1} colSpan={5}></Table.Summary.Cell>
              <Table.Summary.Cell index={6} colSpan={5}></Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={6}>총 지출</Table.Summary.Cell>
              <Table.Summary.Cell index={6} colSpan={5}>일 평균 지출</Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>비용 합계</Table.Summary.Cell>
              <Table.Summary.Cell index={1} colSpan={5}></Table.Summary.Cell>
              <Table.Summary.Cell index={6} colSpan={5}></Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
      <Table
        columns={summaryColumns}
        dataSource={summaryData}
        pagination={false}
        bordered
        style={{ marginTop: 16 }}
      />
    </div>
  );
};

export default MonthlyReport;