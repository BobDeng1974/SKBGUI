#pragma once
#include <base.h>
#include <string>
#include <Component/ComponentModel.h>
#include <Panel/Panel.h>
#include <Label/Label.h>

class CheckBoxModel: public ComponentModel
{
    public:
        CheckBoxModel();
        virtual ~CheckBoxModel();
        bool Checked();
        void SetChecked(bool checked);
        virtual void SetSize(double x,double y);
        virtual void SetSize(Vector2f ComSize);
        std::string Caption();
        void SetCaption(std::string caption);

    protected:

    private:
        bool __checked; //��������� checkbox'�
        sf::RectangleShape __rect; //������� � �������
        sf::Vertex __line2[4]; // ��� ����� ������ (�������)
        pLabel __caption; // ������� ��������
        int __sz; // ������ ���� ��� ������

        friend CheckBox;
        friend CheckBoxViewer;
        friend CheckBoxController;
};
