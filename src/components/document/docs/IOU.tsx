import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect, useState } from "react";
import DetailWrap from "../DetailWrap";
import Name from "../Name";
import Title from "../Title";
import SubmitButton from "../SubmitButton";

const SubmitInput = styled.input`
  all: unset;
  padding: 5px;
  width: 50%;
  border: 1px solid var(--gray-3);
  border-radius: 10px;
  margin-bottom: 20px;
  &:focus {
    border:  qpx solid var(--sub-color-b);
  }
`;

const IOU = (): JSX.Element => {
  const [data, setData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<any>();

  const onSubmit = (data: any) => {
    setData({
      debtor_name: `${data.debtor_name}`,
      debtor_birth: `${data.debtor_birth}`,
      debtor_address: `${data.debtor_address}`,
      creditor_name: `${data.creditor_name}`,
      creditor_birth: `${data.creditor_birth}`,
      creditor_address: `${data.creditor_address}`,
      borrowed_amount: `${data.borrowed_amount}`,
      interest: `${data.interest}`,
      method: `${data.method}`,
      borrowing_date: `${data.borrowing_date}`,
      repayment_date: `${data.repayment_date}`,
      bank: `${data.bank}`,
      account_number: `${data.account_number}`,
      overdue: `${data.overdue}`,
      creation_date: `${data.creation_date}`,
    });
    reset();
  };

  useEffect(() => {
    if (data) {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "금전차용증서",
                    bold: true,
                    size: 30,
                  }),
                ],
                alignment: "center",
              }),
              new Paragraph(""),
              new Table({
                width: {
                  size: 100,
                  type: WidthType.PERCENTAGE,
                },
                rows: [
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 10,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "채무자",
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                        rowSpan: 2,
                      }),
                      new TableCell({
                        width: {
                          size: 10,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "성명",
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                      }),
                      new TableCell({
                        width: {
                          size: 30,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: `${data?.debtor_name}`,
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                        columnSpan: 2,
                      }),
                      new TableCell({
                        width: {
                          size: 10,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "생년월일",
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                      }),
                      new TableCell({
                        width: {
                          size: 40,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: `${data?.debtor_birth}`,
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                        columnSpan: 3,
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 10,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "주소",
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                      }),
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: `${data?.debtor_address}`,
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                        columnSpan: 5,
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 10,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "채권자",
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                        rowSpan: 2,
                      }),
                      new TableCell({
                        width: {
                          size: 10,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "성명",
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                      }),
                      new TableCell({
                        width: {
                          size: 30,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: `${data?.creditor_name}`,
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                        columnSpan: 2,
                      }),
                      new TableCell({
                        width: {
                          size: 10,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "생년월일",
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                      }),
                      new TableCell({
                        width: {
                          size: 40,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: `${data?.creditor_birth}`,
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                        columnSpan: 3,
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 10,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "주소",
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                      }),
                      new TableCell({
                        width: {
                          size: 90,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: `${data?.creditor_address}`,
                            alignment: "center",
                          }),
                        ],
                        verticalAlign: "center",
                        columnSpan: 5,
                      }),
                    ],
                  }),
                ],
              }),
              new Paragraph(""),
              new Table({
                width: {
                  size: 100,
                  type: WidthType.PERCENTAGE,
                },
                rows: [
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "차용금액",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        columnSpan: 5,
                        children: [
                          new Paragraph({
                            text: `일금 ${data?.borrowed_amount}월정(₩ ${data?.borrowed_amount})`,
                            alignment: "left",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "이자",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 30,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `${data?.interest}`,
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "상환방법",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 30,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `${data?.method}`,
                            alignment: "center",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "차용일자",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 30,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `${data?.borrowing_date}`,
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "상환일자",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 30,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `${data?.repayment_date}`,
                            alignment: "center",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "위와 같이 채무자는 채권자로부터 다음과 같은 조건으로 차용한 것을 확인한다.",
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "다    음",
                    bold: true,
                    size: 25,
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "1. 이자는 매월 일까지 채권자가 지정하는 아래 은행으로 송금하도록 한다.",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: `  ( ${data?.bank}, ${data?.debtor_name}, ${data?.account_number})`,
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: `2. 원금은 ${data?.repayment_date}까지 전액 변제한다. 단, 상호합의에 따라 연장할 수 있다.`,
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "3. 담보 및 연대보증인은 없는 것으로 한다.",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: `4. 만일 이자를 ${data?.overdue}일 이상 연체한 경우에는 채무자의 전 채무는 기한의 이익을 상실하고 채권자의 청구즉시 전 채무를 현금으로 변제한다.`,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "위와 같이 채무자는 차용사항을 확인하고, 이 금전차용증서를 작성하여 채권자에게 교부합니다.",
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: `${data?.creation_date}`,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                                            채무자:_________(인)",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                                            연락처:",
                  }),
                ],
              }),
            ],
          },
        ],
      });
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "금전차용증서.docx");
      });
    }
  }, [data]);

  return (
    <DetailWrap submitHandler={handleSubmit(onSubmit)}>
      <Name>금전차용증서</Name>
      <Title>채무자 이름</Title>
      <SubmitInput type="text" {...register("debtor_name")} />
      <Title>채무자 생년월일</Title>
      <SubmitInput type="date" {...register("debtor_birth")} />
      <Title>채무자 주소</Title>
      <SubmitInput type="text" {...register("debtor_address")} />
      <Title>채권자 이름</Title>
      <SubmitInput type="text" {...register("creditor_name")} />
      <Title>채권자 생년월일</Title>
      <SubmitInput type="date" {...register("creditor_birth")} />
      <Title>채권자 주소</Title>
      <SubmitInput type="text" {...register("creditor_address")} />
      <Title>차용금액</Title>
      <SubmitInput type="number" {...register("borrowed_amount")} />
      <Title>이자</Title>
      <SubmitInput type="number" {...register("interest")} />
      <Title>상환방법</Title>
      <SubmitInput type="text" {...register("method")} />
      <Title>차용일자</Title>
      <SubmitInput type="text" {...register("borrowing_date")} />
      <Title>상환일자</Title>
      <SubmitInput type="text" {...register("repayment_date")} />
      <Title>채권자 은행</Title>
      <SubmitInput type="text" {...register("bank")} />
      <Title>채권자 계좌번호</Title>
      <SubmitInput type="text" {...register("account_number")} />
      <Title>연체일</Title>
      <SubmitInput type="text" {...register("overdue")} />
      <Title>작성일자</Title>
      <SubmitInput type="text" {...register("creation_date")} />
      <SubmitButton />
    </DetailWrap>
  );
};

export default IOU;
