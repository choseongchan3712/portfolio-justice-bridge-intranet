import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import styled from "styled-components";
import { useForm } from "react-hook-form";
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
  color: var(--sub-color-b);
  &:focus {
    border: 1px solid var(--sub-color-b);
  }
`;

const Waiver = (): JSX.Element => {
  const [data, setData] = useState<any>(null);

  
  const {register, handleSubmit, reset} = useForm<any>();
  
  const onSubmit = (data:any) => {
    setData({
      debtor_name: `${data.debtor_name}`,
      debtor_id: `${data.debtor_id}`,
      debtor_address: `${data.debtor_address}`,
      debtor_number: `${data.debtor_number}`,
      creditor_name: `${data.creditor_name}`,
      borrowed_amount: `${data.borrowed_amount}`,
      repayment_date: `${data.repayment_date}`,
      collateral: `${data.collateral}`,
      creation_date: `${data.creation_date}`,
    });
    reset();
  };
  
  useEffect(()=>{
    if(data) {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "포기각서",
                    bold: true,
                    size: 30,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "■ 채무자 인적사항",
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `1. 성    명 : ${data?.debtor_name}`,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `2. 주민등록번호 : ${data?.debtor_id}`,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `3. 주    소 : ${data?.debtor_address}`,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `4. 전 화 번 호 : ${data?.debtor_number}`,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "■ 금    액",
                    bold: true,
                  }),
                  new TextRun({
                    text: ` : 일금 ${data?.borrowed_amount}원정 (₩ ${data?.borrowed_amount})`,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "■ 지급기일",
                    bold: true,
                  }),
                  new TextRun({
                    text: ` : ${data?.repayment_date}`,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `본인(${data?.debtor_name})은 채권자(${data?.creditor_name})로부터 금 원을 차용한 것이 틀림없습니다.`,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "차용한 위 금액과 관련하여 변제하지 못하였을 시에 아래의 담보물을 임의처분하여도 이의를 제기하지 않겠습니다.",
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `■ 담보물 : ${data?.collateral}`,
                    bold: true,
                  }),
                  new TextRun({
                    text: "",
                  }),
                ],
              }),
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
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        채무자 성명 : __________(인)",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        주민등록번호 :",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        전화번호 :",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        주소 :",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        연대보증인 성명 : __________(인)",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        주민등록번호 :",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        전화번호 :",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        주소 :",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        연대보증인 성명 : __________(인)",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        주민등록번호 :",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        전화번호 :",
                  }),
                ],
              }),
              new Paragraph({
                alignment: "left",
                children: [
                  new TextRun({
                    text: "                                                                                                                        주소 :",
                  }),
                ],
              }),
            ],
          },
        ],
      });
      Packer.toBlob(doc).then((bolb) => {
        saveAs(bolb, "포기각서(채무변제 불이행시 담보물 임의 처분에 관한).docx");
      });
    }
  }, [data]);

  return (
    <DetailWrap submitHandler={handleSubmit(onSubmit)}>
      <Name>포기각서</Name>
      <Title>채무자 이름</Title>
      <SubmitInput type="text" {...register("debtor_name")} />
      <Title>채무자 주민등록번호</Title>
      <SubmitInput type="text" {...register("debtor_id")} />
      <Title>채무자 주소</Title>
      <SubmitInput type="text" {...register("debtor_address")} />
      <Title>채무자 전화번호</Title>
      <SubmitInput type="text" {...register("debtor_number")} />
      <Title>채권자 이름</Title>
      <SubmitInput type="text" {...register("creditor_name")} />
      <Title>차용금액</Title>
      <SubmitInput type="number" {...register("borrowed_amount")} />
      <Title>상환일자</Title>
      <SubmitInput type="text" {...register("repayment_date")} />
      <Title>담보물</Title>
      <SubmitInput type="text" {...register("collateral")} />
      <Title>작성일자</Title>
      <SubmitInput type="text" {...register("creation_date")} />
      <SubmitButton />
    </DetailWrap>
  );
};

export default Waiver;
