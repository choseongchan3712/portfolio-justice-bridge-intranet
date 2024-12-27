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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { saveAs } from "file-saver";
import DetailWrap from "../DetailWrap";
import Name from "../Name";
import Title from "../Title";
import SubmitButton from "../SubmitButton";

const InputText = styled.input`
  all: unset;
  padding: 5px;
  width: 50%;
  border: 1px solid var(--gray-3);
  border-radius: 10px;
  margin-bottom: 20px;
  color: var(--sub-color-b);
  &:focus {
    border:  1px solid var(--sub-color-b);
  }
`;

const Withdraw = () => {
  const [data, setData] = useState<any>();

  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit = (data: any) => {
    setData({
      delator_name: `${data.delator_name}`,
      respondent_name: `${data.respondent_name}`,
      complaint_date: `${data.complaint_date}`,
      charge: `${data.charge}`,
      creation_date: `${data.creation_date}`,
      department: `${data.department}`,
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
                alignment: "center",
                children: [
                  new TextRun({
                    text: "고 소 취 하 서",
                    bold: true,
                    size: 30,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Table({
                width: {
                  size: 100,
                  type: WidthType.PERCENTAGE,
                },
                borders: {
                  top: { style: "none" },
                  bottom: { style: "none" },
                  left: { style: "none" },
                  right: { style: "none" },
                  insideHorizontal: { style: "none" },
                  insideVertical: { style: "none" },
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
                          size: 15,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "고 소 인",
                            alignment: "left",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 85,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: `${data.delator_name}`,
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
                          size: 15,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "피고소인",
                            alignment: "left",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 85,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: `${data.respondent_name}`,
                            alignment: "left",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `고소인이 ${data.complaint_date} 피고소인을 ${data.charge}혐의로 고소한 사건에 관하여 당사자는 원만히 합의하였기에 고소인은 그 고소를 취하합니다.`,
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `${data.creation_date}`,
                alignment: "center",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `고 소 인 ${data.delator_name} (서명 또는 날인)`,
                alignment: "center",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${data.department} 귀중`,
                    bold: true,
                    size: 25,
                  }),
                ],
              }),
            ],
          },
        ],
      });
      Packer.toBlob(doc).then((bolb) => {
        saveAs(bolb, "고소취하서.docx");
      });
    }
  }, [data]);
  return (
    <DetailWrap submitHandler={handleSubmit(onSubmit)}>
      <Name>고소취하서</Name>
      <Title>고소인 이름</Title>
      <InputText
        type="text"
        {...register("delator_name", { required: "이름은 필수입니다." })}
      />
      <Title>피고소인 이름</Title>
      <InputText
        type="text"
        {...register("respondent_name", { required: "이름은 필수입니다." })}
      />
      <Title>고소일자</Title>
      <InputText
        type="date"
        {...register("complaint_date", { required: "고소일자는 필수입니다." })}
      />
      <Title>고소혐의</Title>
      <InputText
        type="text"
        {...register("charge", { required: "고소혐의는 필수입니다." })}
      />
      <Title>작성일자</Title>
      <InputText
        type="text"
        {...register("creation_date", { required: "작성일자는 필수입니다." })}
      />
      <Title>제출처</Title>
      <InputText
        type="text"
        {...register("department", { required: "제출처는 필수입니다." })}
        placeholder="예) OO경찰서장 / OO지방검찰청검사장"
      />
      <SubmitButton />
    </DetailWrap>
  );
};

export default Withdraw;
