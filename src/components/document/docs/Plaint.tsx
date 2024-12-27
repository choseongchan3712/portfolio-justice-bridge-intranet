import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DetailWrap from "../DetailWrap";
import Name from "../Name";
import Heading from "../Heading";
import HeadingWrap from "../HeadingWrap";
import Title from "../Title";
import SubmitButton from "../SubmitButton";

const InputText = styled.input`
  all: unset;
  padding: 5px;
  width: 50%;
  border: 1px solid var(--gray-3);
  border-radius: 10px;
  color: var(--sub-color-b);
  &:focus {
    border: 1px solid var(--sub-color-b);
  }
`;

const PlusButton = styled.div`
  font-style: normal;
  padding: 5px;
  background-color: #777;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 10px;
  font-size: var(--normal-size);
`;

const Textarea = styled.textarea`
  all: unset;
  width: 50%;
  min-height: 100px;
  border: 1px solid var(--gray-3);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  color: var(--sub-color-b);
  white-space: pre-wrap; /* 줄바꿈 허용 */
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  overflow-x: hidden; /* 가로 스크롤 제거 */
  &:focus {
    border: 1px solid var(--sub-color-b);
  }
`;

const Plaint = (): JSX.Element => {
  const [data, setData] = useState<any>();
  const [factPlus, setfactPlus] = useState<number[]>([1]);
  const [factElement, setFactElement] = useState<any>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const factHandler = () => {
    const newFact = factPlus.length + 1;
    setfactPlus([...factPlus, newFact]);
  };

  const onSubmit = (data: any) => {
    setData({
      delator_name: `${data.delator_name}`,
      delator_address: `${data.delator_address}`,
      delator_id: `${data.delator_id}`,
      delator_number: `${data.delator_number}`,
      respondent_name: `${data.respondent_name}`,
      respondent_address: `${data.respondent_address}`,
      respondent_id: `${data.respondent_id}`,
      respondent_number: `${data.respondent_number}`,
      fact: factPlus.map((value) => `${data["fact" + value]}`),
      creation_date: `${data.creation_date}`,
      department: `${data.department}`,
    });
    reset();
  };

  useEffect(() => {
    if (data) {
      setFactElement(
        data?.fact.map(
          (value: any, index: number) =>
            new Paragraph({
              text: `${index + 1}. ${value || ""}`,
            })
        )
      );
    }
  }, [data]);

  useEffect(() => {
    if (factElement) {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "고    소    장",
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
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        rowSpan: 4,
                        children: [
                          new Paragraph({
                            text: "고 소 인",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `${data.delator_name}`,
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
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `${data.delator_address}`,
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
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `주민등록번호 : ${data.delator_id}`,
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
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `전화번호 : ${data.delator_number}`,
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
                        verticalAlign: "top",
                        rowSpan: 4,
                        children: [
                          new Paragraph({
                            text: "피고소인",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `${data.respondent_name}`,
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
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `${data.respondent_address}`,
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
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `주민등록번호 : ${data.respondent_id}`,
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
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `전화번호 : ${data.respondent_number}`,
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
                text: "고소인은 다음과 같이 피고소인을 고소하오니, 법에 따라 조사하여 처벌하여 주시기 바랍니다.",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "고 소 사 실",
                    bold: true,
                    size: 25,
                  }),
                ],
              }),
              new Paragraph(""),
              ...factElement,
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
                text: `위 고소인 ${data.delator_name} (서명 또는 날인)`,
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
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${data.department} 귀중`,
                    size: 25,
                    bold: true,
                  }),
                ],
              }),
            ],
          },
        ],
      });
      Packer.toBlob(doc).then((bolb) => {
        saveAs(bolb, "고소장.docx");
      });
    }
  }, [factElement]);

  return (
    <DetailWrap submitHandler={handleSubmit(onSubmit)}>
      <Name>고소장</Name>
      <Heading>고소인</Heading>
      <HeadingWrap>
        <Title>
          <span>이름:</span>
          <InputText
            type="text"
            {...register("delator_name", { required: "이름은 필수입니다." })}
          />
        </Title>
        <Title>
          <span>주소:</span>
          <InputText
            type="text"
            {...register("delator_address", { required: "주소는 필수입니다." })}
          />
        </Title>
        <Title>
          <span>주민등록번호:</span>
          <InputText
            type="text"
            {...register("delator_id", {
              required: "주민등록번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>전화번호:</span>
          <InputText
            type="text"
            {...register("delator_number", {
              required: "전화번호는 필수입니다.",
            })}
          />
        </Title>
      </HeadingWrap>
      <Heading>피고소인</Heading>
      <HeadingWrap>
        <Title>
          <span>이름:</span>
          <InputText
            type="text"
            {...register("respondent_name", { required: "이름은 필수입니다." })}
          />
        </Title>
        <Title>
          <span>주소:</span>
          <InputText
            type="text"
            {...register("respondent_address", {
              required: "주소는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>주민등록번호:</span>
          <InputText
            type="text"
            {...register("respondent_id", {
              required: "주민등록번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>전화번호:</span>
          <InputText
            type="text"
            {...register("respondent_number", {
              required: "전화번호는 필수입니다.",
            })}
          />
        </Title>
      </HeadingWrap>
      <Heading>
        고소사실
        <PlusButton onClick={factHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </PlusButton>
      </Heading>
      {factPlus.map((data, index) => (
        <>
          <Title key={index}>사실 {data}</Title>
          <Textarea cols={50} rows={5} {...register(`fact${data}`)}></Textarea>
        </>
      ))}
      <Heading>작성날짜</Heading>
      <InputText
        style={{ marginBottom: "20px" }}
        type="text"
        {...register("creation_date", { required: "작성날짜는 필수입니다." })}
      />
      <Heading>제출처</Heading>
      <InputText
        style={{ marginBottom: "20px" }}
        type="text"
        {...register("department", { required: "제출처는 필수입니다." })}
        placeholder="예) OO경찰서장 / OO지방검찰청검사장"
      />
      <SubmitButton />
    </DetailWrap>
  );
};

export default Plaint;
