Attribute VB_Name = "NewMacros"
Sub ���������()
End Sub
Sub ������1()
Attribute ������1.VB_ProcData.VB_Invoke_Func = "Normal.NewMacros.������1"
    Selection.Font.Name = "Times New Roman"
    Selection.Font.Size = 12
    With Selection.ParagraphFormat
        .LineSpacing = LinesToPoints(1.25)
        .FirstLineIndent = CentimetersToPoints(1.2)
    End With
End Sub
